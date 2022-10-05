const productModel = require("../models/productSchema");

const addNewProduct = (req, res) => {
  const {
    image,
    title,
    description,
    price,
    type,
    city,
    carmake,
    model,
    year,
    transmission,
    fuel,
    color,
    condition,
    Kilometers,
    status,
    userId,
    comments,
    likes,
  } = req.body;
  const product = new productModel({
    image,
    title,
    description,
    price,
    type,
    city,
    carmake,
    model,
    year,
    transmission,
    fuel,
    color,
    condition,
    Kilometers,
    status,
    userId,
    comments,
    likes,
  });
  product
    .save()
    .then((response) => {
      res.status(201);
      res.json({
        success: true,
        message: "Product Added Successfully",
        product: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const getAllProducts = (req, res) => {
  let x = req.params.limit
  productModel
    .find({}).limit(x)
    .populate("userId", `image firstName  lastName`).populate("comments")
    .exec()
    .then((response) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the products",
        products: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const getProductsByUser = (req, res) => {
  const userId1 = req.params.userId;
  productModel
    .find({ userId: userId1 })
    .populate("userId", `image firstName  lastName`)
    .exec()
    .then((response) => {
      res.json({
        success: true,
        message: `${userId1} products`,
        products: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const getProductsByType = (req, res) => {
  const typeCategory = req.params.productType;
  productModel
    .find({ type: typeCategory }).populate("userId", `image firstName  lastName`).exec()
    .then((response) => {
      res.json({
        success: true,
        message: `${typeCategory} products`,
        products: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};
const getProductsBySearch = (req, res) => {
  const searchWord = req.params.search
  productModel
    .find({ title: { $regex: `${searchWord}` } })
    .populate("userId", `image firstName  lastName`)
    .exec()
    .then((response) => {
      res.json({
        success: true,
        message: `${searchWord} products`,
        products: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const deleteProductById = (req, res) => {
  const productId = req.params.productId;
  productModel
    .findOneAndDelete({ _id: productId })
    .then((response) => {
      if (response) {
        res.status(200);
        res.json({ success: true, message: "Product deleted" ,product:productId});
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

const updateProductById = (req, res) => {
  const _id = req.params.productId;
  const {
    image,
    title,
    description,
    price,
    type,
    city,
    carmake,
    model,
    year,
    transmission,
    fuel,
    color,
    condition,
    Kilometers,
    status,
    userId,
    comments,
    likes,
  } = req.body;
  productModel
    .findByIdAndUpdate(
      { _id: _id },
      {
        image,
        title,
        description,
        price,
        type,
        city,
        carmake,
        model,
        year,
        transmission,
        fuel,
        color,
        condition,
        Kilometers,
        status,
        userId,
        comments,
        likes,
      },
      { new: true }
    )
    .then((response) => {
      res.status(201);
      res.json({
        success: true,
        message: "Product updated",
        product: response,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

const getProductsByFilter = (req, res) => {
  let type = req.query.type
  let status =req.query.status
 if (!status){
 let status =undefined
 }
  productModel
    .find({ type: type,status: undefined})
    .populate("userId", `firstName  lastName`)
    .exec()
    .then((response) => {
      res.json({
        success: true,
        message: `filtered products`,
        products: response,
        type:type,
      
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "Server Error", err: err.message });
    });
};

module.exports = {
  addNewProduct,
  getAllProducts,
  getProductsByUser,
  deleteProductById,
  updateProductById,
  getProductsByType,
  getProductsBySearch,
  getProductsByFilter,
};
