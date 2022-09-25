const commentModel = require("../models/commentSchema")
const productModel = require("../models/productSchema")

const createNewComment = (req,res)=>{
    const productId = req.params.productId
    const {comment,commenter} = req.body
    const newComment = new commentModel({
        comment,commenter
    })
    newComment.save().then((response)=>{
        productModel.updateOne({_id:productId},{ $push: { comments: response._id } }).then((result)=>{
            res.status(201)
            res.json({comment: comment,
                commenter: commenter})
        }).catch((err)=>{
            res.status(500)
        res.json({success: false,
            message: "Server Error",
            err: err.message})
        })
        
    }).catch((err)=>{
        res.status(500)
        res.json({success: false,
            message: "Server Error",
            err: err.message})
    })

}

module.exports={createNewComment,}