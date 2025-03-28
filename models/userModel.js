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
};

module.exports = User;
