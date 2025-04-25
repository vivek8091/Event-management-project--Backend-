const db = require("../config/db");

const Contact = {
  addContact: (contactData, callback) => {
    const sqlQuery =
      "insert into contact_details (name, email, country, phone_no, message) values (?,?,?,?,?)";
    db.query(
      sqlQuery,
      [
        contactData.name,
        contactData.email,
        contactData.country,
        contactData.phone_no,
        contactData.message,
      ],
      callback
    );
  },

  getContact: (callback) => {
    const sqlQuery = "select * from contact_details";
    db.query(sqlQuery, callback);
  },

  updateContact: (id, updatedContact, callback) => {
    const sqlQuery =
      "update contact_details set name = ?, email = ?, country = ?, phone_no = ?, message = ? where id = ?";
    db.query(
      sqlQuery,
      [
        updatedContact.name,
        updatedContact.email,
        updatedContact.country,
        updatedContact.phone_no,
        updatedContact.message,
        id,
      ],
      callback
    );
  },

  deleteContact: (id, callback) => {
    const sqlQuery = "delete from contact_details where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = Contact;
