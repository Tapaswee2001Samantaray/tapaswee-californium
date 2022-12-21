const express = require('express');
const router = express.Router();
const CustomerController = require("../controllers/customerController");
const CardController = require("../controllers/cardController");

//Create new customer [POST]
router.post("/createCustomer" , CustomerController.createCustomer);
//Get all customers List with status ACTIVE [GET]
router.get("/getCustomers" , CustomerController.getCustomers);
//Delete customer. [DELETE]
router.delete("/deleteCustomer" , CustomerController.deleteCustomer);
//Create new card [POST]
router.post("/createCard" , CardController.createCard);
//Get all Card List[GET]
router.get("/getCard", CardController.getCard);

module.exports = router;