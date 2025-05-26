const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const userController = require("../controllers/userController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

// APIs to insert data into tables...
router.post("/register", upload.single("image"), userController.registerUser);
router.post("/login", userController.loginUser);

// APIs to update data from tables...
router.put(
  "/updateUser/:id",
  authenticateToken,
  authorizedRoles("user"),
  upload.single("image"),
  userController.updateUserData
);
router.put(
  "/changePassword/:id",
  authenticateToken,
  authorizedRoles("user"),
  userController.updatePassword
);

// APIs to delete data from tables...
router.delete(
  "/deleteUser/:id",
  authenticateToken,
  authorizedRoles("admin"),
  userController.deleteUser
);

module.exports = router;
