const express=require("express")
const loginRouter = express.Router()
const login = require("../controllers/login").login
const Adminlogin = require("../controllers/login").Adminlogin

loginRouter.post('/',login)
loginRouter.post('/Admin',Adminlogin)

module.exports = loginRouter