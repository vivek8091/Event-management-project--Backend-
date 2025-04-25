const db = require("../config/db");

const Admin = {
  addAdmin: (adminData, callback) => {
    const sqlQuery =
      "insert into admin_details (name, email,password,image) values (?,?,?,?)";
    db.query(
      sqlQuery,
      [adminData.name, adminData.email, adminData.password, adminData.image],
      callback
    );
  },

  getAdmin: (callback) => {
    const sqlQuery = "select * from admin_details";
    db.query(sqlQuery, callback);
  },

  updateAdmin: (id, updatedAdmin, callback) => {
    const sqlQuery =
      "update admin_details set name = ?, email = ?, image = ? where id = ?";
    db.query(sqlQuery, [
      updatedAdmin.name,
      updatedAdmin.email,
      updatedAdmin.image,
      id
    ], callback);
  },

  deleteAdmin: (id, callback) => {
    const sqlQuery = "delete from admin_details where id = ?";
    db.query(sqlQuery, id, callback);
  },

  login: (email, callback) => {
    const sqlQuery = "select * from admin_details where email = ?";
    db.query(sqlQuery, email, callback);
  },
};

module.exports = Admin;
