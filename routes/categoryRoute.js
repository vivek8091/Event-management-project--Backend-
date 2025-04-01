const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const categoryController = require("../controllers/categoryController");

router.post(
  "/addCategory",
  upload.single("image"),
  categoryController.createCategory
);
router.put(
  "/updateCategory/:id",
  upload.single("image"),
  categoryController.updateCategory
);
router.get("/getCategory", categoryController.getCategoryData);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router;
