const express = require("express");
const favoriteRouter = express.Router();
const authentication = require("../middlewares/authentication").authentication;
const authorization = require("../middlewares/authorization").authorization;
const addToFavorite = require("../controllers/favorite").addToFavorite;
const getAllFavorite = require("../controllers/favorite").getAllFavorite

favoriteRouter.post("/:productId", addToFavorite);
favoriteRouter.get("/",getAllFavorite)

module.exports = favoriteRouter;
