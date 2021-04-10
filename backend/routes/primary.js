var express=require('express');
var router=express.Router()
var bodyParser=require('body-parser')

var mongoose=require('mongoose')
var User=require('../models/userModel')
var medicalrecord=require('../models/medicalrecord')

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
            date: Date.now() + '',
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





module.exports=router