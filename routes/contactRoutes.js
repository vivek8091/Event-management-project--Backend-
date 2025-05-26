const express = require("express");
const router = express.Router();
// const upload = require("../middleware/upload");
const contactController = require("../controllers/contactController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

router.post(
  "/createContact",
  authenticateToken,
  authorizedRoles("user"),
  contactController.createContact
);
router.get("/getContact", authenticateToken,authorizedRoles('admin'), contactController.getContact);
router.put(
  "/updateContact/:id",
  authenticateToken,
  authorizedRoles("admin"),
  contactController.updateContact
);
router.delete(
  "/deleteContact/:id",
  authenticateToken,
  authorizedRoles("admin"),
  contactController.deleteContact
);

module.exports = router;
