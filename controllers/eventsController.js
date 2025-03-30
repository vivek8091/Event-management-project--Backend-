const eventsModel = require("../models/eventsModel");

exports.addNewEvent = (req, res) => {
  const {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    event_category_name,
    event_location,
    event_description,
  } = req.body;

  const event_image = req.file ? req.file.filename : null;

  const newEvent = {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    event_category_name,
    event_location,
    event_description,
    event_image,
  };

  eventsModel.addEvent(newEvent, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error creating new user user!!!",
        error: err,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "User registered successfully...",
        data: result,
      });
    }
  });
};

exports.getEventData = (req, res) => {
  eventsModel.getEventData((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error fetching event data!!!",
        error: err,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Event data fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateEvent = (req, res) => {
  const {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    event_category_name,
    event_location,
    event_description,
  } = req.body;

  const eventId = req.params.id;
  const event_image = req.file ? req.file.filename : null;

  const updatedEventData = {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    event_category_name,
    event_location,
    event_description,
    event_image,
  };

  eventsModel.updateEvent(eventId, updatedEventData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Event not updated successfully!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Event updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteEvent = (req, res) => {
  const eventId = req.params.id;
  eventsModel.deleteEvent(eventId, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Could not delete event successfully!!!",
        });
    } else {
      return res.status(200).json({ success: true, message: "Event deleted successfully..." });
    }
  });
};
