const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

let createBooks = async function(req , res){
    let data = req.body;
    if(data.author_id){
        let createAllBooks = await BookModel.create(data);
        res.send({msg:createAllBooks});
    }else{
        res.send("Could not able to save data.")
    }
    
}

let getBooksByChatanBhagat = async function(req , res){
    // let authorObj = await AuthorModel.find({author_name:"Chetan Bhagat"});
    // let authorId = authorObj[0].author_id;
    //==========or===========
    let authorObj = await AuthorModel.findOne({author_name:"Chetan Bhagat"});
    let authorId = authorObj.author_id;
    let BookListOfChetanBhagat = await BookModel.find({author_id:authorId});
    res.send({msg:BookListOfChetanBhagat});
}

let getAuthorOfTwoStatesAndUpdatePrice = async function(req, res){
    /*
    let updatedObj = await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new: true}
    ).select({author_id:1 , _id:0});
    let authorName = await AuthorModel.findOne(updatedObj).select({author_name:1 , _id:0});
    let updatedPrice = await BookModel.findOne({name:"Two states"}).select({price:1,_id:0});
    res.send({msg:authorName , updatedPrice});
    */
   //==========or==========
   let updatedObj = await BookModel.findOneAndUpdate(
    {name:"Two states"},
    {$set:{price:100}},
    {new: true}
   )
   let id = updatedObj.author_id;
   let authorDetails = await AuthorModel.findOne({author_id:id});
   let newObj = {
        "AuthorName":authorDetails.author_name,
        "UpdatedPrice": updatedObj.price
   }
   res.send({msg:newObj});
}

 let getBookPrice = async function(req,res){
    let bookPrice = await BookModel.find({price:{$gte:50, $lte:100}});
    let result = bookPrice.map(x => x.author_id);

    let allBooks = await AuthorModel.find({author_id:result}).select({author_name:1, _id:0});

    res.send({msg:allBooks});
}
module.exports.createBooks = createBooks;
module.exports.getBooksByChatanBhagat = getBooksByChatanBhagat;
module.exports.getAuthorOfTwoStatesAndUpdatePrice = getAuthorOfTwoStatesAndUpdatePrice;
module.exports.getBookPrice = getBookPrice;