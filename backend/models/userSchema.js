const mongoose= require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
image:{type:String},
firstName:{type:String ,required:true },
lastName:{type:String ,required:true},
email:{type:String ,required:true,unique:true},
password:{type:String,required:true},
age:{type:Number},
country:{type:String },
gender:{type:String },
role: {type: mongoose.Schema.Types.ObjectId, ref: "Role"},
dateRegistered:{type:String },
phoneNumber:{type:String },
favorites:[{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
likes:[{type: mongoose.Schema.Types.ObjectId, ref: "Product"}]
})

userSchema.pre("save",async function(){
    if(this.password!="0"){
    this.password = await bcrypt.hash(this.password,10)
    this.email = await this.email.toLowerCase()
    }}
    )

module.exports = mongoose.model("User",userSchema)