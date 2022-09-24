const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");






/* 登录用户和注册用户*/
router.post('/register', userController.register);
router.post("/", userController.login)
    // router.put("/update", userController.update)
    /* 修改用户*/

module.exports = router;