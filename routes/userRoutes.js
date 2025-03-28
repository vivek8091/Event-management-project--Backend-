const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const userController = require("../conrollers/userController");

router.post("/register", upload.single("image"), userController.registerUser);

module.exports = router;