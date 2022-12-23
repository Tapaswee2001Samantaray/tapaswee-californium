const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productController");

router.post("/createProduct" , ProductController.createProduct);

module.exports = router;