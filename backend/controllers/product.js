const productModel = require("../models/productSchema")

const addNewProduct = (req,res)=>{
    const {image,title, description , price ,userId , comments , likes} = req.body
    const product = new productModel({image,title, description , price ,userId , comments , likes})
    product.save().then((response)=>{
        res.status(201)
        res.json({success: true,
            message: "Product Added Successfully",
            product: response})
    }).catch((err)=>{
        res.status(500)
        res.json({success: false,
            message: "Server Error",
            err: err.message
            })
    })

}

const getAllProducts=(req,res)=>{
    productModel.find({}).then((response)=>{
res.status(200)
res.json({ success: true,
    message: "All the products",
    products: response})
       
    }).catch((err)=>{
        res.status(500)
        res.json({success: false,
            message: "Server Error",
            err: err.message})
        
        
    })

}


const getProductsByUser = (req,res)=>{
    const userId1 = req.query.userId
    productModel.find({userId:userId1}).then((response)=>{
res.json({ success: true,
    message: `${userId1} products`,
    products: response})
    }).catch((err)=>{
        res.status(500)
        res.json({success: false,
            message: "Server Error",
            err: err.message})
        
    })
}


const deleteProductById = (req,res)=>{
    const productId = req.params.productId
    productModel.findOneAndDelete({_id:productId}).then((response)=>{
        res.status(200)
        res.json({success: true,
            message: "Product deleted"})}).catch((err)=>{
                res.status(500)
                res.json({  success: false,
                    message: "Server Error",
                    err: err.message})
              
            })
        
}

const updateProductById = (req,res)=>{
    const productId = req.params.productId
    const {image,title, description , price ,userId , comments , likes}=req.body
    productModel.findByIdAndDelete({_id:productId} , req.body , {new:true}).then((response)=>{
        res.status(201)
        res.json({success: true,
            message: "Product updated",
            product : response})}).catch((err)=>{
                res.status(500)
                res.json({  success: false,
                    message: "Server Error",
                    err: err.message})
              
            })
        
}
module.exports={addNewProduct,getAllProducts,getProductsByUser,deleteProductById}