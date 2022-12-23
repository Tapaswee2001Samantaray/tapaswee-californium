const AuthorModel = require("../models/authorModel");

let createAuthor = async function(req , res){
    let data = req.body;
    let createAllAuthor = await AuthorModel.create(data);
    res.send({created : createAllAuthor});
}

module.exports.createAuthor = createAuthor;