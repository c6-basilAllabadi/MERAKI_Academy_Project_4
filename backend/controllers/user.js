const userModel = require("../models/userSchema")

const register = async(req,res)=>{
    const {firstName , lastName , email , password , age , country , gender , role , dateRegistered , phoneNumber} = req.body
   const user1 =  await userModel.findOne({email:email})
   if(!user1){
    const user = new userModel ({firstName , lastName , email , password , age , country , gender , role , dateRegistered , phoneNumber})
    user.save().then((result) => {
        res.status(201).json({
          success: true,
          message: `Account Created Successfully`,
          user: result,
        });
      })
      .catch((err) => {
        if (err.keyPattern) 
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });}
      if(user1){{
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }}
  };

  module.exports = {register , }