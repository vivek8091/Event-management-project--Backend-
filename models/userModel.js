const db = require("../config/db");

const User = {
  createUser: (userData, callback) => {
    const sqlQuery =
      "insert into users (name, email, gender, mobile_no, password, image, is_blocked) values (?,?,?,?,?,?,?)";
    db.query(
      sqlQuery,
      [
        userData.name,
        userData.email,
        userData.gender,
        userData.mobile_no,
        userData.password,
        userData.image,
        userData.is_blocked,
      ],
      callback
    );
  },

  getUsers: (callback) => {
    const sqlQuery = "select * from users";
    db.query(sqlQuery, callback);
  },

  updateUser: (id, updatedData, callback) => {
    const sqlQuery =
      "update users set name = ?, email = ?, gender = ?, mobile_no = ?, image = ?, is_blocked = ?  where id = ?";
    db.query(
      sqlQuery,
      [
        updatedData.name,
        updatedData.email,
        updatedData.gender,
        updatedData.mobile_no,
        updatedData.image,
        updatedData.is_blocked,
        id,
      ],
      callback
    );
  },

  deleteUser: (id, callback) => {
    const sqlQuery = "delete from users where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = User;
