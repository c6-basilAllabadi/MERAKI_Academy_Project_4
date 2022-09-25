const express = require("express")
const roleRouter = express.Router()

const createNewRole = require("../controllers/role").createNewRole

roleRouter.post('/',createNewRole)

module.exports = roleRouter
