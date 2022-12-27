const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const tokenValidation = function(req , res , next){
    let token = req.headers["x-auth-token"];
  if(!token){
    return res.send({status:false , msg:"the header token is required."});
  }
  
  let decoded = jwt.verify(token , "functionup-californium-secret-key");
  if(!decoded){
    return res.send({status:false , msg:"Invalid token id."});
  }

  next();
}

const userValidation = async function(req , res , next){
  let userId = req.params.userId;
  let userDetails = await UserModel.findById(userId);
  if(!userDetails){
    return res.send({status:false , msg:"No such user exists with this ID."});
  }else{
    next();
  }
}


module.exports.tokenValidation = tokenValidation;
module.exports.userValidation = userValidation;