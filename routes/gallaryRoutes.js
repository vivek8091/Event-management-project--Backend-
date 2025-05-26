const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const gallaryController = require("../controllers/gallaryController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

// APIs to add new gallary in table...
router.post(
  "/addGallary",
  authenticateToken,
  authorizedRoles("admin"),
  upload.single("gallary_image"),
  gallaryController.addNewGallary
);

// APIs to fetch data from gallary table...
router.get(
  "/getGallaryData",
  authenticateToken,
  authorizedRoles("admin", "user"),
  gallaryController.getGallaryData
);

// APIs to update data in gallary table...
router.put(
  "/updateGallary/:id",
  authenticateToken,
  authorizedRoles("admin"),
  upload.single("gallary_image"),
  gallaryController.updateGallaryData
);

// APIs to delete data from gallary table...
router.delete(
  "/deleteGallary/:id",
  authenticateToken,
  authorizedRoles("admin"),
  gallaryController.deleteGallary
);

module.exports = router;
