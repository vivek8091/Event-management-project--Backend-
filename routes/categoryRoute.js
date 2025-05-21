const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const categoryController = require("../controllers/categoryController");
const authenticateToken = require("../middleware/authMiddleware");
const authorizedRoles = require("../middleware/authorizedRole");

router.post(
  "/addCategory",
  upload.single("image"),
  authenticateToken,
  authorizedRoles("admin"),
  categoryController.createCategory
);
router.put(
  "/updateCategory/:id",
  upload.single("image"),
  authenticateToken,
  authorizedRoles("admin"),
  categoryController.updateCategory
);
router.get(
  "/getCategory",
  authenticateToken,
  authorizedRoles("user", "admin"),
  categoryController.getCategoryData
);
router.delete(
  "/deleteCategory/:id",
  authenticateToken,
  authorizedRoles("admin"),
  categoryController.deleteCategory
);

module.exports = router;
