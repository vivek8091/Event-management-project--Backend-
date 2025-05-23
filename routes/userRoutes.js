const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const userController = require("../controllers/userController");
const userAuthToken = require("../middleware/authMiddleware");

// APIs to insert data into tables...
router.post("/register", upload.single("image"), userController.registerUser);
router.post("/login", userController.loginUser);

// APIs to update data from tables...
router.put(
  "/updateUser/:id",
  userAuthToken,
  upload.single("image"),
  userController.updateUserData
);
router.put(
  "/changePassword/:id",
  userAuthToken,
  userController.updatePassword
);

// APIs to delete data from tables...
router.delete("/deleteUser/:id",userAuthToken, userController.deleteUser);

module.exports = router;
