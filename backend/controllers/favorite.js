const { TokenExpiredError } = require("jsonwebtoken");
const favoriteModel = require("../models/favoriteSchema");
const userModel = require("../models/userSchema")


const addToFavorite = (req, res) => {
  const productId = req.params.productId;
  const newProduct = new favoriteModel({ productId });
  newProduct
    .save()
    .then((response) => {
        userModel.updateOne({_id:req.token.userId},{ $push: { favorites:newProduct.productId }},{new:true}).then((response)=>{
            res.status(201);
            res.json({
              success: true,
              message: "Product Added to Favorite Successfully",
             response : newProduct.productId
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

const getAllFavorite = (req, res) => {
    userModel
    .find({_id:req.token.userId}).populate("favorites")
    .then((response) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the favorites",
        favorites: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const deleteFromFavorite = (req, res) => {
  const favoriteId = req.params.favoriteId;
  userModel
  .findOneAndUpdate({_id:req.token.userId},{ $pull: { favorites: favoriteId }})
    .then((response) => {
      if (response) {
        res.status(200);
        res.json({ success: true, message: "Product deleted from Favorites",product:favoriteId });
      }
      if (!response) {
        res.status(404).json({
          success: false,
          message: `The Product: ${_id} is not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

module.exports = { addToFavorite, getAllFavorite, deleteFromFavorite };
