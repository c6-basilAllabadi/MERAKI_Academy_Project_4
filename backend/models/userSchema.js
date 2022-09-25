const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
firstName:{type:String ,required:true },
lastName:{type:String },
email:{type:String ,required:true,unique:true },
password:{type:String,required:true},
age:{type:Number},
country:{type:String },
gender:{type:String },
role: {type: mongoose.Schema.Types.ObjectId, ref: "Role"},
dateRegistered:{type:String },
phoneNumber:{type:String }
})


module.exports = mongoose.model("User",userSchema)