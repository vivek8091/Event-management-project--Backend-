const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const eventsController = require("../controllers/eventsController");
const authorizedRoles = require("../middleware/authorizedRole");
const authenticateToken = require("../middleware/authMiddleware");

// APIs to add data in table...
router.post(
  "/addEvent",
  upload.single("event_image"),
  authenticateToken,
  // authorizedRoles("admin"),
  eventsController.addNewEvent
);

// APIs to fetch data from table...
router.get(
  "/getEventData",
  authenticateToken,
  authorizedRoles("user"),
  eventsController.getEventData
);
router.get(
  "/getEventById/:id",
  authenticateToken,
  // authorizedRoles("user"),
  eventsController.getEventDataById
);

// APIs to update data in table...
router.put(
  "/updateEvent/:id",
  upload.single("event_image"),
  authenticateToken,
  // authorizedRoles("admin"),
  eventsController.updateEvent
);

// APIs to delete data from table...
router.delete(
  "/deleteEvent/:id",
  authenticateToken,
  // authorizedRoles("admin"),
  eventsController.deleteEvent
);

// API to get event by it's category name...
router.get(
  "/getEventByCategory/:event_category_name",
  authenticateToken,
  // authorizedRoles("user"),
  eventsController.getEventByCatetory
);

module.exports = router;
