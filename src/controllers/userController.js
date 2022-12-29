const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let createAllUser = await UserModel.create(data);
      return res.status(201).send({ status: true, created: createAllUser });
    } else {
      return res.status(400).send({ msg:"Error" , Error: "BAD REQUEST" });
    }
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
}

const logInUser = async function (req, res) {
  try {
    let email = req.body.emailId;
    let password = req.body.password;
    let user = await UserModel.findOne({ emailId: email, password: password });
    if (!user) {
      return res.status(401).send({ status: false, msg: "Error: Wrong EmailId or Password." });
    }
    let token = jwt.sign({ userId: user._id.toString() }, "functionup-californium-secret-key");
    res.header("x-auth-token" , token);
    return res.status(201).send({status : true , msg : "Token created."});
    // return res.send({ status: true, created: token });
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
}

const getUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userDetails = await UserModel.findById(userId);

    res.status(200).send({ status: true, Data: userDetails });
  }catch(err){
    return res.status(500).send({ Error: err.message });
  }
}

const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userData = req.body;
    let updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      userData,
      { new: true }
    );

    res.status(201).send({ status: true, updated: updateUser });
  }catch(err){
    return res.status(500).send({ Error: err.message });
  }
}

let deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let deleteUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: true } },
      { new: true }
    );

    res.status(200).send({ status: true, deleted: deleteUser });
  }catch(err){
    return res.status(500).send({ Error: err.message });
  }
}

let postMessage = async function (req, res) {
  try{
    let message = req.body.message;
    let userId = req.params.userId;
    let users = await UserModel.findById(userId);
    let updatedPost = users.posts;
    //add message to the users post
    updatedPost.push(message);

    let updateThePost = await UserModel.findOneAndUpdate(
      { _id: users._id },
      { posts: updatedPost },
      { new: true }
    );

    res.status(201).send({ status: true, post: updateThePost });
  }catch(err){
    return res.send(500).send({Error : err.message});
  }
}

module.exports.createUser = createUser;
module.exports.logInUser = logInUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;