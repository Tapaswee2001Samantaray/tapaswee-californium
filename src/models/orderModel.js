const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId : {
        type : ObjectId,
        ref : "user1"
    },
    productId :{
        type : ObjectId,
        ref : "product"
    },
    amount : {
        type : Number,
        default : 0
    },
    isFreeAppUser : Boolean,
    date : Date
});

module.exports = mongoose.model("order" , orderSchema);