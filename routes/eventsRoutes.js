const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const eventsController = require("../controllers/eventsController");

// APIs to add data in table...
router.post(
  "/addEvent",
  upload.single("event_image"),
  eventsController.addNewEvent
);

// APIs to fetch data from table...
router.get("/getEventData", eventsController.getEventData);
router.get("/getEventById/:id", eventsController.getEventDataById);

// APIs to update data in table...
router.put(
  "/updateEvent/:id",
  upload.single("event_image"),
  eventsController.updateEvent
);

// APIs to delete data from table...
router.delete("/deleteEvent/:id", eventsController.deleteEvent);

// API to get event by it's category name...
router.get(
  "/getEventByCategory/:event_category_name",
  eventsController.getEventByCatetory
);

module.exports = router;
