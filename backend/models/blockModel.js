const mongoose = require("mongoose");



const blockschema = mongoose.Schema({
    prev_hash:String,
    hash:String,
    transaction:String,
    size:Number
}, {timestamps:true});


var Block = mongoose.model("Block", blockschema)


module.exports = Block