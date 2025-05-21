const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const gallaryController = require("../controllers/gallaryController");
const authToken = require("../middleware/authMiddleware");

// APIs to add new gallary in table...
router.post(
  "/addGallary",
  // authToken,
  upload.single("gallary_image"),
  gallaryController.addNewGallary
);

// APIs to fetch data from gallary table...
router.get("/getGallaryData",  gallaryController.getGallaryData);

// APIs to update data in gallary table...
router.put(
  "/updateGallary/:id",
  // authToken,
  upload.single("gallary_image"),
  gallaryController.updateGallaryData
);

// APIs to delete data from gallary table...
router.delete("/deleteGallary/:id",  gallaryController.deleteGallary);

module.exports = router;
