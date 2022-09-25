const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
/*image : {type:Image, required:true},*/
title: {type:String, required:true},
description: {type:String, required:true},
price : {type:Number, required:true},
userId: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
comments: [{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}],
likes: {type:Number},
})

module.exports = mongoose.model("Product",productSchema)