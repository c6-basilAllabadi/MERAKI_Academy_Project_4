const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login =async (req,res)=>{
    const {email , password} = req.body
    const user = await userModel.findOne({email:email.toLowerCase()}).populate("role").exec();
        
        if(!user){
            res.status(404)
            res.json({
                success: false,
                message: "The email doesn't exist"})
                return 
        }
    
    const storedPassword = user.password;
    const passwordCheck = await bcrypt.compare(password, storedPassword);
    if (!passwordCheck) {
      res
        .status(403)
        .json({
          success: false,
          message: "The password you’ve entered is incorrect",
        });
        return 
    }
  
    const payload = {
      userId: user._id,
      role: user.role
    };
  
    const SECRET = process.env.SECRET;
    const options = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, SECRET, options);
  
    res.status(200)
      .json({ success: true, massage: "Valid login credentials", token: token,userId:user._id});
  }

  const Adminlogin =async (req,res)=>{
    const {email , password} = req.body
    const user = await userModel.findOne({email:email.toLowerCase()}).populate("role").exec()
        
        if(!user){
            res.status(404)
            res.json({
                success: false,
                message: "The email doesn't exist"})
                return 
        }
    
    const storedPassword = user.password;
    const passwordCheck = await bcrypt.compare(password, storedPassword);
    if (!passwordCheck) {
      res
        .status(403)
        .json({
          success: false,
          message: "The password you’ve entered is incorrect",
        });
        return 
    }
  if(user.role._id!="633093bb93da1efda1bded0e"){
    res
    .status(403)
    .json({
      success: false,
      message: "you are not the admin",
    });
    return 
  }
    const payload = {
      userId: user._id,
      role: user.role
    };
 
    const SECRET = process.env.SECRET;
    const options = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, SECRET, options);
  
    res.status(200)
      .json({ success: true, massage: "Valid login credentials", token: token,userId:user._id , role:user.role});
  }

module.exports={login,Adminlogin}