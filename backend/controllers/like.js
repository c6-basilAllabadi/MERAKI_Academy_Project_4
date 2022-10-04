const likesModel = require("../models/likesSchema")



const addNewLike = (req,res)=>{
    const {product,liker} = req.body
    const newLike = new likesModel({product,liker})

    newLike.save().then((response)=>{
        console.log(response)
        res.json(response)
    }).catch((err)=>{
        console.log(err)
    })

}
const getAllLikes = (req,res)=>{
    const product = req.query.product
    const liker = req.query.liker
 
    likesModel.find({product:product,liker:liker}).then((response)=>{
        console.log(response)
        res.json(response)
    }).catch((err)=>{
        res.json(err.message)
    })

}



module.exports={addNewLike,getAllLikes}