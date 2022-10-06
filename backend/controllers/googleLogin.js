const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const googleRegister = async(req,res)=>{
    const {image,firstName , lastName , email,role} = req.body
   const user1 =  await userModel.findOne({email:email})
   if(!user1){
    const user = new userModel ({image,firstName , lastName , email,role })
    user.save().then((result) => {
        console.log(result)
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
        const payload = {
            userId: user1._id,
            role: user1.role
          };
        
          const SECRET = process.env.SECRET;
          const options = {
            expiresIn: '1h',
          };
          const token = jwt.sign(payload, SECRET, options);
        
          res.status(200)
            .json({ success: true, massage: "Valid login credentials", token: token,userId:user1._id});
      }}
  };

const googleLogin =async (req,res)=>{
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

  
module.exports={googleLogin,googleRegister}