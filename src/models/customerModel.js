const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: {
        type: String,
        unique: true
    },
    DOB: Date,
    emailID: String,
    address: String,
    customerID: {
        type: String,
        unique: true,
        require: true
    },
    status:{
        type: String,
        enum: ["ACTIVE" , "INACTIVE"]
    }
} , {timestamps: true});

module.exports = mongoose.model("customer" , customerSchema);