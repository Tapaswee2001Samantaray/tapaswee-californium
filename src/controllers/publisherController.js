const PublisherModel = require("../models/publisherModel");

let createPublisher = async function(req ,res){
    let data = req.body;
    let createAllPublisher = await PublisherModel.create(data);
    res.send({created : createAllPublisher});
}

module.exports.createPublisher = createPublisher;