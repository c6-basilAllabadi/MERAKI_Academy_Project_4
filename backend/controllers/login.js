const userModel = require("../models/userSchema")

const login =async (req,res)=>{
    const {email , password} = req.body
    const user = await userModel.findOne({email});
        
        if(!user){
            res.status(404)
            res.json({
                success: false,
                message: "The email doesn't exist"})
                return 
        }
        const storedPassword = await user.password
       if(user){
        if (storedPassword==password){
            res.json({success: true,
                massage: "Valid login credentials",
                })
            res.status(200)
            return 
        }
        else{
            res.status(403)
            res.json( {
                success: false,
                message: "The password you’ve entered is incorrect"
               })
            return }

}}
module.exports={login,}