const express=require("express")
const userRouter =express.Router()
const register = require("../controllers/user").register
const getUserInfo = require("../controllers/user").getUserInfo

userRouter.post("/",register)
userRouter.get("/:userId",getUserInfo)



module.exports=userRouter