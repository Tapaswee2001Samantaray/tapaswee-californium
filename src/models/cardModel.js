const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    cardNumber: String,
    cardType: String,
    customerName: String,
    status:{
        type: String,
        enum: ["ACTIVE" , "INACTIVE"]
    },
    vision: String,
    customerID: {
        type: String,
        require: true,
        unique: true
    }
} , {timestamps: true});

module.exports = mongoose.model("Card" , cardSchema);