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
    const { name, email, image } = updatedAdmin;
    const sqlQuery =
      "update admin_details set name = ?, email = ? where id = ?";
    const params = [name, email, id];

    if (image) {
      sqlQuery =
        "UPDATE admin_details SET name = ?, email = ?, image = ? WHERE id = ?";
      params.push(image);
    }
    db.query(sqlQuery, params, callback);
  },

  deleteAdmin: (id, callback) => {
    const sqlQuery = "delete from admin_details where id = ?";
    db.query(sqlQuery, id, callback);
  },

  login: (email, callback) => {
    const sqlQuery = "select * from admin_details where email = ?";
    db.query(sqlQuery, email, callback);
  },

  getAdminById: (id, callback) => {
    const sqlQuery = "select * from admin_details where id = ?";
    db.query(sqlQuery, id, callback);
  },

  changePassword: (id, newPassword, callback) => {
    const sqlQuery = "update admin_details set password = ?  where id = ?";
    db.query(sqlQuery, [newPassword, id], callback);
  },
};

module.exports = Admin;
