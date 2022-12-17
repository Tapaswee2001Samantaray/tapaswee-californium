const BookModel = require("../models/bookModel")

let createBook = async function(req , res){
    let data = req.body;
    let allBooksData = await BookModel.create(data);
    res.send({msg : allBooksData});
}

module.exports.createBook = createBook;