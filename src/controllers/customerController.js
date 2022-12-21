const CustomerModel = require("../models/customerModel");

let createCustomer = async function(req , res){
    let data = req.body;
    let customerData = await CustomerModel.create(data);
    res.status(200).send({stored:customerData});
}

let getCustomers = async function(req , res){
    let getCusOnStatus = await CustomerModel.find({status:{$eq:"ACTIVE"}});
    res.status(200).send({show:getCusOnStatus});
}

let deleteCustomer = async function(req , res){
    let delCusOnStatus = await CustomerModel.findOneAndRemove({status:{$eq:"INACTIVE"}});
    res.status(200).send({deleted:delCusOnStatus});
}

module.exports.createCustomer = createCustomer;
module.exports.getCustomers = getCustomers;
module.exports.deleteCustomer = deleteCustomer;