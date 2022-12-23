const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");

let createBook = async function(req ,res){
    const {name,author,price,ratings,publisher}=req.body;

    if(!author){
        res.send({msg:"Error : Author field is required . Please enter the author ID."});
    }

    if(!publisher){
        res.send({msg:"Error : Publisher field is required  . Please enter the publisher ID."});
    }

    const authorDetails=await AuthorModel.findOne({_id:author});
    if(!authorDetails){
        res.send({msg:"Error: Author is not present.Please enter a valid Author ID."});
    }

    const publisherDetails=await PublisherModel.findOne({_id:publisher});
    if(!publisherDetails){
        res.send({msg:"Error:Publisher is not present.Please enter a valid publisher ID."})
    }

    let createAllBooks = await BookModel.create(req.body);
            res.send({msg: createAllBooks}); 
}

let getBooks = async function(req , res){
    let allBooks = await BookModel.find().populate("author").populate("publisher");
    res.send({show:allBooks});
}

const updateBooksByPublisher = async function(req,res){
    let publisherDetails = await PublisherModel.find({name:{$in:["Penguin" , "HarperCollins"]}}); //[{_id along with whole object of Penguin},{_id along with whole object ofHarperCollins}]
    let publisherIDs = publisherDetails.map(publisherId => publisherId._id); //[_id,_id]
    let updatePublisher = await BookModel.updateMany(
        {publisher : {$in:publisherIDs}},
        {$set:{isHardCover:true}}
        );
    res.send({updated : updatePublisher});
}

const updateBooksPrice=async function(req,res){
    
    const updatePrice=await BookModel.updateMany(
        {ratings:{$gt:3.5}},
        {$inc:{"price":10}},
        {new:true})
    res.send({msg:updatePrice});
}

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.updateBooksByPublisher = updateBooksByPublisher;
module.exports.updateBooksPrice = updateBooksPrice;