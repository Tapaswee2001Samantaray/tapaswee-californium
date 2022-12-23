const ProductModel = require("../models/productModel");

const createProduct = async function(req , ref){
    let data = req.body;
    let createAllProducts = await ProductModel.create(data);
    res.send({created:ProductModel});
}

module.exports.createProduct = createProduct;