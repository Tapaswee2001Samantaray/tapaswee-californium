const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productController");
const UserController = require("../controllers/userController");
const OrderController = require("../controllers/orderController");
const Middleware = require("../middlewares/commonMiddlewares");

router.post("/createProduct" , ProductController.createProduct);
router.post("/createUser" , Middleware.isFreeAppUserValidation , UserController.createUser);
router.post("/createOrder" , Middleware.isFreeAppUserValidation , Middleware.userValidation , Middleware.productValidation , OrderController.createOrder);

module.exports = router;