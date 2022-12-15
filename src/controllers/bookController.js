
const BookModel= require("../models/bookModel")

const createBookData = async function(req , res){
    let data = req.body;
    let savedData = await BookModel.create(data);
    res.send({msg: savedData});
}

const getBookData = async function(req , res){
    let getAllBooksData = await BookModel.find();
    res.send({msg: getAllBooksData});
}

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

module.exports.createBookData = createBookData;
module.exports.getBookData = getBookData;

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData