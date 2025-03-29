const db = require("../config/db");

const Events = {
  addEvent: (eventData, callback) => {
    const sqlQuery =
      "insert into add_event_by_admin (event_title, event_start_date, event_end_date, event_start_time, event_end_time, event_price, category_name, event_location, event_description, event_image) values (?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sqlQuery,
      [
        eventData.event_title,
        eventData.event_start_date,
        eventData.event_end_date,
        eventData.event_start_time,
        eventData.event_end_time,
        eventData.event_price,
        eventData.category_name,
        eventData.event_location,
        eventData.event_description,
        eventData.event_image,
      ],
      callback
    );
  },
};
