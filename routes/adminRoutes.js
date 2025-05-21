const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const adminController = require("../controllers/adminController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/addAdmin", upload.single("image"), adminController.createAdmin);
router.post("/adminLogin", adminController.adminLogin);
router.get(
  "/getAdmin",
  authenticateToken,
  authorizedRoles("admin"),
  adminController.getAdminData
);
router.get(
  "/getUsers",
  authenticateToken,
  authorizedRoles("admin"),
  adminController.getAllUsers
);
router.put(
  "/updateAdmin/:id",
  authenticateToken,
  authorizedRoles("admin"),
  upload.single("image"),
  adminController.updateAdmin
);
router.put(
  "/changePassword/:id",
  authenticateToken,
  authorizedRoles("admin"),
  adminController.updatePassword
);
router.delete(
  "/deleteAdmin/:id",
  authenticateToken,
  adminController.deleteAdmin
);

module.exports = router;
