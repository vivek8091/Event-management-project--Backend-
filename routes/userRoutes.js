const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const userController = require("../controllers/userController");

// APIs to insert data into tables...
router.post("/register", upload.single("image"), userController.registerUser);

// APIs to select(read) data from tables...
router.get("/getUsers", userController.getAllUsers);

// APIs to update data from tables...
router.put(
  "/updateUser/:id",
  upload.single("image"),
  userController.updateUserData
);

// APIs to delete data from tables...
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
