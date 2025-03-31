const db = require("../config/db");

const Gallary = {
  addGallary: (gallaryData, callback) => {
    const sqlQuery =
      "insert into admin_add_gallary (gallary_title, gallary_image) values (?,?)";
    db.query(
      sqlQuery,
      [gallaryData.gallaryTitle, gallaryData.gallaryImage],
      callback
    );
  },

  getGallaryData: (callback) => {
    const sqlQuery = "select * from admin_add_gallary";
    db.query(sqlQuery, callback);
  },

  updateGallary: (id, updatedGallary, callback) => {
    const sqlQuery =
      "update admin_add_gallary set gallary_title = ?, gallary_image = ? where id = ?";
    db.query(
      sqlQuery,
      [updatedGallary.gallaryTitle, updatedGallary.gallaryImage, id],
      callback
    );
  },

  deletGallary: (id, callback) => {
    const sqlQuery = "delete from admin_add_gallary where id = ?";
    db.query(sqlQuery,id, callback);
  },
};

module.exports = Gallary;
