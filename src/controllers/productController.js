const ProductModel = require("../models/productModel");

const createProduct = async function(req , res){
    let data = req.body;
    let createAllProducts = await ProductModel.create(data);
    res.send({created:createAllProducts});
}

module.exports.createProduct = createProduct;