const CardModel = require("../models/cardModel");

let createCard = async function(req , res){
    let data = req.body;
    let cardData = await CardModel.create(data);
    res.status(200).send({stored:cardData});
}

let getCard = async function(req , res){
    let getAllCards = await CardModel.find();
    res.status(200).send({show:getAllCards});
}

module.exports.createCard = createCard;
module.exports.getCard = getCard;