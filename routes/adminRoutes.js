const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const adminController = require("../controllers/adminController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/addAdmin", upload.single("image"), adminController.createAdmin);
router.post("/adminLogin", adminController.adminLogin);
router.get("/getAdmin", authenticateToken, adminController.getAdminData);
router.get("/getUsers", authenticateToken, adminController.getAllUsers);
router.put(
  "/updateAdmin/:id",
  authenticateToken,
  upload.single("image"),
  adminController.updateAdmin
);
router.put(
  "/changePassword/:id",
  authenticateToken,
  adminController.updatePassword
);
router.delete(
  "/deleteAdmin/:id",
  authenticateToken,
  adminController.deleteAdmin
);

module.exports = router;
