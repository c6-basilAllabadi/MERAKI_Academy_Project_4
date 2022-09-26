const favoriteModel = require("../models/favoriteSchema");

const addToFavorite = (req, res) => {
  const productId = req.params.productId;
  const newProduct = new favoriteModel({ productId });
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

const getAllFavorite = (req, res) => {
  favoriteModel
    .find({})
    .populate("productId")
    .exec()
    .then((response) => {
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

const deleteFromFavorite = (req, res) => {
  const favoriteId = req.params.favoriteId;
  favoriteModel
    .findOneAndDelete({ _id: favoriteId })
    .then((response) => {
      if (response) {
        res.status(200);
        res.json({ success: true, message: "Product deleted" });
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
