const express = require("express")
const productRouter = express.Router()

const addNewProduct = require("../controllers/product").addNewProduct
const getAllProducts = require("../controllers/product").getAllProducts
const getProductsByUser = require("../controllers/product").getProductsByUser
const deleteProductById = require("../controllers/product").deleteProductById

productRouter.post("/",addNewProduct)
productRouter.get("/",getAllProducts)
productRouter.get("/search_1",getProductsByUser)
productRouter.delete("/:productId",deleteProductById)

module.exports=productRouter