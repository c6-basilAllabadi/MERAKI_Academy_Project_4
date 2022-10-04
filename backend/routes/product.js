const express = require("express")
const productRouter = express.Router()

const addNewProduct = require("../controllers/product").addNewProduct
const getAllProducts = require("../controllers/product").getAllProducts
const getProductsByUser = require("../controllers/product").getProductsByUser
const deleteProductById = require("../controllers/product").deleteProductById
const updateProductById = require("../controllers/product").updateProductById
const createNewComment = require("../controllers/comment").createNewComment
const getProductsByType = require("../controllers/product").getProductsByType
const getProductsBySearch=require("../controllers/product").getProductsBySearch
const getProductsByFilter = require("../controllers/product").getProductsByFilter
const addNewLike = require("../controllers/like").addNewLike
const getAllLikes = require("../controllers/like").getAllLikes
const authentication = require("../middlewares/authentication").authentication
const authorization = require("../middlewares/authorization").authorization


productRouter.post("/",authentication,authorization("add"),addNewProduct)
productRouter.get("/:limit",getAllProducts)
productRouter.get("/searchUser/:userId",getProductsByUser)
productRouter.get("/type/:productType",getProductsByType)
productRouter.get("/search/:search",getProductsBySearch)
productRouter.get("/filter",getProductsByFilter)
productRouter.delete("/:productId",authentication,authorization("delete"),deleteProductById)
productRouter.put("/:productId",authentication,authorization("update"),updateProductById)
productRouter.post("/comments/:productId",authentication,authorization("add"),createNewComment)
productRouter.post("/like",authentication,authorization("add"),addNewLike)
productRouter.get("/like/get/:userId",authentication,authorization("add"),getAllLikes)


module.exports=productRouter