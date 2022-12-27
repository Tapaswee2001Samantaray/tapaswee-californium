const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController");
const MiddleWare = require("../middleware/auth");

router.post("/users" , UserController.createUser);
router.post("/login" , UserController.logInUser);
router.get("/users/:userId" , MiddleWare.tokenValidation, MiddleWare.userValidation , UserController.getUser);
router.put("/users/:userId" , MiddleWare.tokenValidation , MiddleWare.userValidation , UserController.updateUser);
router.delete("/users/:userId" , MiddleWare.tokenValidation , MiddleWare.userValidation , UserController.deleteUser);


module.exports = router;