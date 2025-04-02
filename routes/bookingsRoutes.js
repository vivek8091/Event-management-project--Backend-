const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const bookingController = require("../controllers/bookingsController");

router.post(
  "/createBooking",
  upload.single("booking_image"),
  bookingController.createBooking
);

router.get("/getBookings", bookingController.getBookings);

router.put(
  "/updateBooking/:id",
  upload.single("booking_image"),
  bookingController.updateBookings
);

router.delete("/deleteBooking/:id", bookingController.deleteBooking);

module.exports = router;
