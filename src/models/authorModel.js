const mongoose = require("mongoose");

let authorSchema = new mongoose.Schema({
    authorName : String,
    age : Number,
    address : String,
    rating : Number
} , {timestamps: true});

module.exports = mongoose.model("newAuthor" , authorSchema);