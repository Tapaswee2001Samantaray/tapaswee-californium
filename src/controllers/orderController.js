const OrderModel = require("../models/orderModel");
const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel");

const createOrder = async function(req , res){
    let data = req.body;
    let savedData;
    if(req.headers.isfreeappuser == "true"){
        data.amount = 0;
        data.isFreeAppUser = true;
        savedData = await OrderModel.create(data);
    }else{
        let savedUser = await UserModel.findById(data.userId).select({balance:1 , _id:0});
        let balance = savedUser.balance;
        
        let savedProduct = await ProductModel.findById(data.productId).select({price:1 , _id:0});
        let price = savedProduct.price;

        if(price <= balance){
            await UserModel.findOneAndUpdate(
                {_id : data.userId},
                {$inc:{balance : -price}}
            );

            data.amount = price;
            savedData = await OrderModel.create(data);
        }else{
            res.send({Error : "Insufficient balance."});
        }
    }

    res.send({show : savedData});
}

module.exports.createOrder = createOrder;