const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const createUser = async function(req , res){
    let data = req.body;
    let createAllUser = await UserModel.create(data);
    res.send({status:true , created:createAllUser});
}

const logInUser = async function(req , res){
  let email = req.body.emailId;
    let password = req.body.password;
    let user = await UserModel.findOne({emailId:email , password:password});
    if (!user) {
      return res.send({status:false , msg:"Error: User"});
    }
    let token = jwt.sign({userId:user._id.toString()} , "functionup-californium-secret-key");
    return res.send({status:true , created:token});
}

const getUser = async function(req , res){

  let userId = req.params.userId;
  let userDetails = await UserModel.findById(userId);

  res.send({status:true , Data:userDetails});
}

const updateUser = async function(req , res){

  let userId = req.params.userId;
  let userData = req.body;
  let updateUser = await UserModel.findOneAndUpdate(
    {_id:userId},
    userData,
    {new:true}
  );

  res.send({status:true , updated:updateUser});
}

let deleteUser = async function(req , res){

  let userId = req.params.userId;
  let deleteUser = await UserModel.findOneAndUpdate(
    {_id:userId},
    {$set:{isDeleted:true}},
    {new:true}
  );

  res.send({status:true , deleted:deleteUser});
}

module.exports.createUser = createUser;
module.exports.logInUser = logInUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;