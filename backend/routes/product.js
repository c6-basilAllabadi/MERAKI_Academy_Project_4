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
const authentication = require("../middlewares/authentication").authentication
const authorization = require("../middlewares/authorization").authorization

productRouter.post("/",authentication,authorization("add"),addNewProduct)
productRouter.get("/",getAllProducts)
productRouter.get("/search_1",getProductsByUser)
productRouter.delete("/:productId",authentication,authorization("delete"),deleteProductById)
productRouter.put("/:productId",authentication,authorization("update"),updateProductById)
productRouter.post("/:productId/comments",authentication,authorization("add"),createNewComment)
productRouter.get("/:productType",getProductsByType)
productRouter.get("/search_2/:search",getProductsBySearch)

module.exports=productRouter