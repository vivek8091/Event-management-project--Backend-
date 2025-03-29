const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const userController = require("../conrollers/userController");

router.post("/register", upload.single("image"), userController.registerUser);
router.get("/getUsers",userController.getAllUsers );
router.put("/updateUser/:id", upload.single("image"), userController.updateUserData );
router.delete("/deleteUser/:id", userController.deleteUser );

module.exports = router;