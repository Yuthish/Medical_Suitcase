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





module.exports=router