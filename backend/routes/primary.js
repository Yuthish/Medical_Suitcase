var express=require('express');
var router=express.Router()
var bodyParser=require('body-parser')

var mongoose=require('mongoose')
var User=require('../models/userModel')
var medicalrecord=require('../models/medicalrecord')

router.get("/",function(req,res){
    res.send("Hello")
})





module.exports=router