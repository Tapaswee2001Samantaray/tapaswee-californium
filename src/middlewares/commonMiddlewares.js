const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel");

const isFreeAppUserValidation = function(req ,res ,next){
    let header = req.headers;
    
    if(header.isfreeappuser){
        //  console.log(req.isFreeAppUser);
        req.isFreeAppUser=header.isfreeappuser;
        //  console.log(req.isFreeAppUser);
        next();
    }else{
        return res.send({Error :" Missing a mandatory header isFreeAppUser."});
    }
}

const userValidation = async function(req , res , next){
    let data = req.body.userId;
    let user = await UserModel.findOne({_id:data});
    if(user){
        next();
    }else{
        return res.send({Error : "User is invalid. Please enter a valid UserId."});
    }
}

const productValidation = async function(req , res , next){
    let data = req.body.productId;
    let product = await ProductModel.findOne({_id:data});
    if(product){
        next();
    }else{
        return res.send({Error : "Product is invalid. Please enter a valid ProcuctId."});
    }
}

module.exports.isFreeAppUserValidation = isFreeAppUserValidation;
module.exports.userValidation = userValidation;
module.exports.productValidation = productValidation;