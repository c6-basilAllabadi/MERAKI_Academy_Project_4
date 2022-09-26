const mongoose=require("mongoose")

const favoriteSchema = new mongoose.Schema({
    productId : {type:mongoose.Schema.Types.ObjectId , ref:"Product"},
    user:{type:String}
})

module.exports = mongoose.model("Favorite",favoriteSchema)