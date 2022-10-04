const mongoose = require("mongoose")


const likesSchema=new mongoose.Schema({
product: {type:String, required:true},
liker: [{type:mongoose.Schema.Types.ObjectId, ref: "User"}]
})

module.exports = mongoose.model("Likes",likesSchema)