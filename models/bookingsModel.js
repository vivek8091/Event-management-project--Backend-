const db = require("../config/db");

const Bookings = {
  addBooking: (newBooking, callback) => {
    const sqlQuery =
      "insert into event_bookings (user_id, booking_title, ticket_id, event_date_time, event_location, booking_date, booking_price, booking_image) values (?,?,?,?,?,?,?,?)";
    db.query(
      sqlQuery,
      [
        newBooking.userId,
        newBooking.booking_title,
        newBooking.ticket_id,
        newBooking.event_date_time,
        newBooking.event_location,
        newBooking.booking_date,
        newBooking.booking_price,
        newBooking.booking_image,
      ],
      callback
    );
  },

  getBookings: (callback) => {
    const sqlQuery = "select * from event_bookings";
    db.query(sqlQuery, callback);
  },

  updateBookings: (id, updatedBooking, callback) => {
    const sqlQuery =
      "update event_bookings set booking_title = ?, ticket_id = ?, event_date_time = ?, event_location = ?, booking_date = ?, booking_price = ?, booking_image = ? where id = ?";
    db.query(
      sqlQuery,
      [
        updatedBooking.booking_title,
        updatedBooking.ticket_id,
        updatedBooking.event_date_time,
        updatedBooking.event_location,
        updatedBooking.booking_date,
        updatedBooking.booking_price,
        updatedBooking.booking_image,
        id,
      ],
      callback
    );
  },

  deleteBooking: (id, callback) => {
    const sqlQuery = "delete from event_bookings where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = Bookings;
