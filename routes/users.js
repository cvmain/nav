const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");


router.put("/update/:id", userController.update)
router.get("/getuser", userController.getUser)
router.post("/setlove", userController.setLove)
    /* 修改用户*/

module.exports = router;