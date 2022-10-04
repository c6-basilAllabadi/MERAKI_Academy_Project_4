const likesModel = require("../models/likesSchema")



const addNewLike= (req, res) => {
    const {product,liker} = req.body
    const newLike = new likesModel({product,liker})
    newLike
      .save()
      .then((response) => {
          userModel.updateOne({_id:req.token.userId},{ $push: { likes:newLike.product }},{new:true}).then((response)=>{
              res.status(201);
              res.json({
                success: true,
                message: "Product Added to Liked Successfully",
               response : newLike.product
              })}
          ).catch((err)=>{
              res.status(500);
              res.json({ success: false, message: "Server Error", err: err.message });
          })
      ;
      })
      .catch((err) => {
        res.status(500);
        res.json({ success: false, message: "Server Error", err: err.message });
      });
  };
  
  const getAllLikes =(req,res)=>{
    const liker = req.params.userId
    likesModel.find({liker:liker}).then((response)=>{
        console.log(response)
        res.json(response)
    }).catch((err)=>{
        res.json(err.message)
    })
  }

const getUserLikes = (req,res)=>{
    const product = req.query.product
    const liker = req.query.liker
 
    likesModel.find({product:product,liker:liker}).then((response)=>{
        console.log(response)
        res.json(response)
    }).catch((err)=>{
        res.json(err.message)
    })

}



module.exports={addNewLike,getAllLikes,getUserLikes}