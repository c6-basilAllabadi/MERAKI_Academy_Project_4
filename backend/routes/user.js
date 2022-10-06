const express=require("express")
const userRouter =express.Router()
const register = require("../controllers/user").register
const getUserInfo = require("../controllers/user").getUserInfo
const googleRegister = require("../controllers/googleLogin").googleRegister

userRouter.post("/",register)
userRouter.get("/:userId",getUserInfo)
userRouter.post("/googleRegister",googleRegister)




module.exports=userRouter