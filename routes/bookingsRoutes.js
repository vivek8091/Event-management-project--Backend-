const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const bookingController = require("../controllers/bookingsController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

router.post(
  "/createBooking",
  authenticateToken,
  authorizedRoles("user"),
  bookingController.createBooking
);

router.get(
  "/getBookings",
  authenticateToken,
  authorizedRoles("user", "admin"),
  bookingController.getBookings
);
router.get(
  "/getBookingsByUser/:user_id",
  authenticateToken,
  authorizedRoles("user", "admin"),
  bookingController.getBookingByUser
);

router.put(
  "/updateBooking/:id",
  upload.single("booking_image"),
  authenticateToken,
  authorizedRoles("user", "admin"),
  bookingController.updateBookings
);

router.delete(
  "/deleteBooking/:id",
  authenticateToken,
  authorizedRoles("admin"),
  bookingController.deleteBooking
);

module.exports = router;
