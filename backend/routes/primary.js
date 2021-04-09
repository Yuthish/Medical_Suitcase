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





module.exports=router