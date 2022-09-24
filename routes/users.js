const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");






/* GET users listing. */
router.post('/register', userController.register);
router.get("/login", userController.login)
module.exports = router;