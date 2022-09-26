const express = require("express")
const productRouter = express.Router()

const addNewProduct = require("../controllers/product").addNewProduct
const getAllProducts = require("../controllers/product").getAllProducts
const getProductsByUser = require("../controllers/product").getProductsByUser
const deleteProductById = require("../controllers/product").deleteProductById
const updateProductById = require("../controllers/product").updateProductById
const createNewComment = require("../controllers/comment").createNewComment
const authentication = require("../middlewares/authentication").authentication
const authorization = require("../middlewares/authorization").authorization

productRouter.post("/",authentication,authorization("add"),addNewProduct)
productRouter.get("/",getAllProducts)
productRouter.get("/search_1",getProductsByUser)
productRouter.delete("/:productId",deleteProductById)
productRouter.put("/:productId",updateProductById)
productRouter.post("/:productId/comments",createNewComment)


module.exports=productRouter