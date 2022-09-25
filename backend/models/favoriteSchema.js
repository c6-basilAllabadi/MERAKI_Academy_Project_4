const mongoose=require("mongoose")

const favoriteSchema = new mongoose.Schema({
    product : {type:mongoose.Schema.Types.ObjectId , ref:"Product"}
})

module.exports = mongoose.model("Favorite",favoriteSchema)