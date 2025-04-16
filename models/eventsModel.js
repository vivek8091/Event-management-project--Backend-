const db = require("../config/db");

const Events = {
  addEvent: (eventData, callback) => {
    const sqlQuery =
      "insert into add_event_by_admin (event_title, event_start_date, event_end_date, event_start_time, event_end_time, event_price, event_category_name, event_location, event_description, event_image) values (?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sqlQuery,
      [
        eventData.event_title,
        eventData.event_start_date,
        eventData.event_end_date,
        eventData.event_start_time,
        eventData.event_end_time,
        eventData.event_price,
        eventData.event_category_name,
        eventData.event_location,
        eventData.event_description,
        eventData.event_image,
      ],
      callback
    );
  },

  getEventData: (callback) => {
    const sqlQuery = "select * from add_event_by_admin";
    db.query(sqlQuery, callback);
  },

  getEventById: (id, callback) => {
    const sqlQuery = "select * from add_event_by_admin where id = ?";
    db.query(sqlQuery, id, callback);
  },

  getEventDataByCategory: (category, callback) => {
    const sqlQuery = "SELECT * FROM add_event_by_admin WHERE event_category_name = ?";
    db.query(sqlQuery,[category], callback);
  },

  updateEvent: (id, updatedEvent, callback) => {
    const sqlQuery =
      "update add_event_by_admin set event_title = ?, event_start_date = ?, event_end_date = ?, event_start_time = ?, event_end_time = ?, event_price = ?, event_category_name = ?, event_location = ?, event_description = ?, event_image = ? where id = ?";
    db.query(
      sqlQuery,
      [
        updatedEvent.event_title,
        updatedEvent.event_start_date,
        updatedEvent.event_end_date,
        updatedEvent.event_start_time,
        updatedEvent.event_end_time,
        updatedEvent.event_price,
        updatedEvent.event_category_name,
        updatedEvent.event_location,
        updatedEvent.event_description,
        updatedEvent.event_image,
        id,
      ],
      callback
    );
  },

  deleteEvent: (id, callback) => {
    const sqlQuery = "delete from add_event_by_admin where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = Events;
