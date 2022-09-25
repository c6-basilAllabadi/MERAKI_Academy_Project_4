const express=require("express")
const userRouter =express.Router()
const register = require("../controllers/user").register

userRouter.post("/",register)



module.exports=userRouter