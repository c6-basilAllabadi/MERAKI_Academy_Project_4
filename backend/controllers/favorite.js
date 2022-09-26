const favoriteModel = require("../models/favoriteSchema");

const addToFavorite = (req, res) => {
  const productId = req.params.productId;
  const newProduct = new favoriteModel({productId});
  newProduct
    .save()
    .then((response) => {
      res.status(201);
      res.json({
        success: true,
        message: "Product Added to Favorite Successfully",
        product: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};


const getAllFavorite = (req,res)=>{
  
    favoriteModel.find({}).populate("productId").exec().then((response)=>{
    res.status(200);
    res.json({
      success: true,
      message: "All the favorites",
      products: response,
    });
  })
  .catch((err) => {
    res.status(500);
    res.json({ success: false, message: "Server Error", err: err.message });
  });
};

const deleteFromFavorite = (req,res)=>{
    const productId = req.params.productId;
    favoriteModel.findOneAndDelete({ _id: productId }).then((response) => {
        res.status(200);
        res.json({ success: true, message: "Product deleted from favorite" });
      })
      .catch((err) => {
        res.status(500);
        res.json({ success: false, message: "Server Error", err: err.message });
      });
  };
  




module.exports = { addToFavorite,getAllFavorite};
