const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController");
const AuthorController = require("../controllers/authorController");

router.post("/createBooks" , BookController.createBooks);
router.post("/createAuthors" , AuthorController.createAuthors);
router.get("/booksByChatanBhagat" ,BookController.getBooksByChatanBhagat);
router.get("/authorOfTwoStatesAndUpdatePrice" , BookController.getAuthorOfTwoStatesAndUpdatePrice);
router.get("/bookPrice", BookController.getBookPrice);

module.exports = router;