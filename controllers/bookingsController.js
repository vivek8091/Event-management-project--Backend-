const bookingModel = require("../models/bookingsModel");

const mysqlDateTimeFormat = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

exports.createBooking = (req, res) => {
  const eventDateTimeFormatted = mysqlDateTimeFormat(req.body.event_date_time);
  const {
    user_id,
    booking_title,
    ticket_id,
    event_location,
    booking_date,
    booking_price,
  } = req.body;
  const booking_image = req.file ? req.file.filename : null;
  const bookingData = {
    user_id,
    booking_title,
    ticket_id,
    event_date_time: eventDateTimeFormatted,
    event_location,
    booking_date,
    booking_price,
    booking_image,
  };

  bookingModel.addBooking(bookingData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not add boooking!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "Booking added successfully...",
        data: result,
      });
    }
  });
};

exports.getBookings = (req, res) => {
  bookingModel.getBookings((err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Could bot get bookings!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Bookings fetched successfully...",
        data: result,
      });
    }
  });
};

exports.getBookingByUser = (req, res) => {
  const userId = req.params.user_id;
  bookingModel.fetchBookingsByUser(userId, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Could not fetch bookings!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Bookings fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateBookings = (req, res) => {
  const id = req.params.id;
  const {
    booking_title,
    ticket_id,
    event_date_time,
    event_location,
    booking_date,
    booking_price,
  } = req.body;

  const booking_image = req.file ? req.file.filename : null;
  const updatedBooking = {
    booking_title,
    ticket_id,
    event_date_time,
    event_location,
    booking_date,
    booking_price,
    booking_image,
  };

  bookingModel.updateBookings(id, updatedBooking, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not update booking!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Booking updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteBooking = (req, res) => {
  const id = req.params.id;
  bookingModel.deleteBooking(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete booking!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Booking deleted successfully...",
        data: result,
      });
    }
  });
};
