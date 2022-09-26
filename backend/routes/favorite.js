const express = require("express");
const favoriteRouter = express.Router();
const authentication = require("../middlewares/authentication").authentication;
const authorization = require("../middlewares/authorization").authorization;
const addToFavorite = require("../controllers/favorite").addToFavorite;
const getAllFavorite = require("../controllers/favorite").getAllFavorite
const deleteFromFavorite =require("../controllers/favorite").deleteFromFavorite



favoriteRouter.post("/:productId",authentication,authorization("add"),addToFavorite);
favoriteRouter.get("/",getAllFavorite)
favoriteRouter.delete("/:favoriteId",authentication,authorization("delete"),deleteFromFavorite)

module.exports = favoriteRouter;
