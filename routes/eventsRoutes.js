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

// APIs to update data in table...
router.put("/updateEvent/:id", upload.single("event_image"), eventsController.updateEvent);

// APIs to delete data from table...
router.delete("/deleteEvent/:id", eventsController.deleteEvent);


module.exports = router;
