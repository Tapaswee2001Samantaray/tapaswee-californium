const UserModel = require("../models/userModel");

const createUser = async function(req , res){
    let data = req.body;
    // console.log(req.isFreeAppUser);
    // console.log(data.isFreeAppUser);
    data.isFreeAppUser = req.isFreeAppUser;
    // console.log(data.isFreeAppUser);
    let createAllUsers = await UserModel.create(data);
    res.send({UserCreated : createAllUsers});
}



module.exports.createUser = createUser;