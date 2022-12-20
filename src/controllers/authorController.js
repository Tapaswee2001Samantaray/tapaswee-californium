const AuthorModel = require("../models/authorModel");

let createAuthors = async function(req , res){
    let data = req.body;
    if(data.author_id){
        let createAllAuthors = await AuthorModel.create(data);
        res.send({msg:createAllAuthors});
    }else{
        res.send("Could not able to save data.");
    }
}

module.exports.createAuthors = createAuthors;