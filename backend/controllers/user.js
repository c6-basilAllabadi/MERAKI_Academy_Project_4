const userModel = require("../models/userSchema")

const register = async(req,res)=>{
    const {image,firstName , lastName , email , password , age , country , gender , role , dateRegistered , phoneNumber} = req.body
   const user1 =  await userModel.findOne({email:email})
   if(!user1){
    const user = new userModel ({image,firstName , lastName , email , password , age , country , gender , role , dateRegistered , phoneNumber})
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
const getUserInfo = (req,res)=>{
  const userId = req.params.userId
  userModel.find({_id:userId}).then((response)=>{res.status(200).json({
    success: true,
    message: `UserInfo are ready`,
    userInfo: response,
  })

  }).catch((err)=>{
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });

  })
}
  module.exports = {register , getUserInfo}