const db = require("../config/db");

const ContactList = {
  createContact: (contactDetails, callback) => {
    const sqlQuery =
      "insert into contact_list (contact_name, contact_email, contact_no, contact_message) values(?,?,?,?)";
    db.query(
      sqlQuery,
      [
        contactDetails.contact_name,
        contactDetails.contact_email,
        contactDetails.contact_no,
        contactDetails.contact_message,
      ],
      callback
    );
  },

  getContactList: (callback) => {
    const sqlQuery = "select * from contact_list";
    db.query(sqlQuery, callback);
  },

  updateContactList: (id, updatedContact, callback) => {
    const sqlQuery =
      "update contact_list set contact_name = ?, contact_email = ?, contact_no = ?, contact_message = ? where id = ?";
    db.query(sqlQuery, [
      updatedContact.contact_name,
      updatedContact.contact_email,
      updatedContact.contact_no,
      updatedContact.contact_message,
      id
    ], callback);
  },

  deleteContactList: (id, callback) => {
    const sqlQuery = "delete from contact_list where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = ContactList;
