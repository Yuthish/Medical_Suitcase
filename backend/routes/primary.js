var express=require('express');
var router=express.Router()
var bodyParser=require('body-parser')

var mongoose=require('mongoose')
var User=require('../models/userModel')
var medicalrecord=require('../models/medicalrecord')
const dig_sig = require('../blockchain/digital_signature');
// const create_signature = require('../blockchain/digital_signature');
const hasher = require('../blockchain/chain_utility')
var Block=require("../models/blockModel");


const convert_age = (timestamp)=>{
    let date = new Date(timestamp)
    var timestamp = date.getTime();
    if (date.getDate() > 9){
        if(date.getMonth()<10){
        var formatted_date = date.getFullYear() + "-" + "0"+(parseInt(date.getMonth())+1).toString() + "-" + date.getDate()
        }
        else{
            var formatted_date = date.getFullYear() + "-" + (parseInt(date.getMonth())+1).toString() + "-" + date.getDate()

        }
    } else {
        if(date.getMonth()<10){
            var formatted_date = date.getFullYear() + "-" + "0"+(parseInt(date.getMonth())+1).toString() + "-" + date.getDate()
            }
        else{
                var formatted_date = date.getFullYear() + "-" + (parseInt(date.getMonth())+1).toString() + "-" + date.getDate()
    
            }
    }
    return formatted_date;
}

router.get("/",function(req,res){
    res.send("Hello")
})

router.get("/drinfo",function(req,res){
    var id=req.query.id
    User.findOne({ID:id})
        .then(user=>{console.log(user)
            res.json(user)})
        .catch(err=>{console.log(err)})
})

router.get("/searchuser",function(req,res){
    console.log("request received")
    var id=req.query.ID;
    console.log(id)
    User.findOne({ID:id})
        .then((user)=>{
            if(user){
            
            res.json({res:"YES"})
            console.log(user)
            }
            else{
                res.json({res:"NO"})
            }
        })

})

router.get("/getuser",function(req,res){
    var id=req.query.id;
    User.findOne({ID:id}).populate("mymedicalrecords")
        .then(user=>{
            res.json(user)
        })
        .catch(err=>{
            console.log(err)
        })

})


router.get("/storemedicalrecords",function(req,res){
    console.log(req)
    var medicines=req.query.medicines;
    var record=req.query.report;
    var patientID=req.query.id;
    var doctorID=req.query.idone;
    console.log(doctorID)
    var patientname=req.query.name
    console.log(medicines)
    console.log(record)
    var medlist=[]
    var doctorName=req.query.docName;
    var doctorPlace=req.query.docPlace;


    User.findOne({ID:doctorID})
    .then(user=>{
        console.log("Doctor",user)
        // doctorPlace=user.details.doc.workplace_list[0];
        // doctorName=user.details.name;
        console.log("name",typeof(doctorName),"place",typeof(doctorPlace),typeof(doctorID))
    })
    
    .catch(err=>{
        console.log(err)
    })
    console.log("Doctor name",doctorName)
    medicines.forEach(med=>{
        medlist.push(JSON.parse(med))

    })

    medicalrecord.create({
            doc: {
                name: doctorName,
                place: doctorPlace,
                ID: doctorID
            },
            date: convert_age(Date.now()),
            report: record,
            keywords: ["Headache", "body", "aches", "Fever", "dengue"],
            medicine_list: medlist,
        })
        .then(med=>{
            console.log("Doctor name",doctorName)
            console.log("prescription",med)
            User.findOne({ID:patientID})
            .then(founduser=>{
                console.log("FOUNDUSER",founduser)
                console.log(founduser.details.doc.workplace_list)
                founduser.mymedicalrecords.push(med)
                founduser.save()

            })
            .catch(err=>{
                console.log(err)
            })

        })
        .catch(err=>{
            console.log(err)
        })
        
        
        // function(err,med){
        //     if(err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log("med",med)
        //         User.findOne({ID:patientID},function(err,founduser){
        //             if(err){
        //                 console.log(err)
        //             }
        //             else{
        //                 console.log("FOUNDUSER",founduser)
        //                 founduser.mymedicalrecords.push(med)
        //                 founduser.save()
        //             }
        //         })
        //     }
        // }
        
  
    
})

router.get('/fetchdata',function(req,res) {
    var id=req.query.id;
    console.log(id)
    var from =req.query.from;
    var to=req.query.to;
    var data=[]
    var num=0
    
   
        
     User.findOne({ID:id}).populate('mymedicalrecords')
        .then(user=>{
            console.log(user)
            user.mymedicalrecords.forEach(x=>{
                if(x.date<=to && x.date>=from){
                    console.log("medical record",x)

                    data.push(x)
                    num=num+1
                }
            })
            res.json(data)
            
        })
        .then((res)=>{
            console.log("data"  ,data)
            var newone=data;
            // console.log("done1")
            //  res.render(newone)
            //  console.log("done2")
        })
        .catch(err=>{
            console.log(err)
        })
        // .then(()=>{
        //     console.log(data)
        //     return data;
        // })
    
    // find().then((data)=>{
    //     console.log(data)
    // })
    
    
})




router.get('/getrecord',function(req,res){
    var idone=req.query.idone;
    var idtwo=req.query.idtwo;
    console.log(idtwo)
    User.findOne({ID:idone}).populate('mymedicalrecords')
        .then(founduser=>{
            console.log('founduser',founduser)
            founduser.mymedicalrecords.forEach(x=>{
                if(x._id.toString()==idtwo){
                    res.json(x)
                }
                console.log("ID",typeof(x._id))
            })
        })
})

router.get("/createblock",function(req,res){
    var presJSON=req.query.pres
    console.log(presJSON)
    let block={}
    let pvtkey=dig_sig.generate_keys().privateKey
    block.transaction=dig_sig.create_signature(presJSON, pvtkey).toString('base64')
    Block.findOne({}, {}, { sort: { 'created_at' : -1 } })
    .then(prevBlock=>{
        console.log(prevBlock)
        block.prev_hash=prevBlock.hash
        block['hash'] = hasher.hash_block(JSON.stringify(block));
        block['size'] = JSON.stringify(block).length+4;
         Block.create(block)
         .then(thisBlock=>{
             console.log(thisBlock)
         })
         .catch(err=>{
             console.log(err)
         })


    })
    .catch(err=>{
        console.log(err)
    });


})

router.get("/getblocksdata",function(req,res){
    let blocksdata=[]
    Block.find({})
    .then(allblocks=>{
        
        res.json(allblocks.reverse())

    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/gettingrecord",function(req,res){
    var id=req.query.id
    medicalrecord.findOne({_id:id})
    .then(med=>{
        console.log(med)
        res.json(med)
    })
})

router.get("/passsig",function(req,res){
    var pvtKey=req.query.pvtKey
    var pubKey=req.query.pubKey
    var pres=req.query.pres
    console.log(pvtKey,pubKey,pres)
    var sig= dig_sig.create_signature(pres,pvtKey)
    res.end(sig)

    
})

router.get("/check",function(req,res){
    var input=req.query.input
    var pres=req.query.pres
    var sig=req.query.sig;
    var buf = new Buffer.from(sig,'base64');
    // console.log("typeof",typeof(buf),buf)
    
    var ans=dig_sig.verify_signature(buf,pres,input)
    console.log(ans)
})





module.exports=router