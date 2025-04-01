const db = require("../config/db");

const Category = {
  addCategory: (catData, callback) => {
    const sqlQuery =
      "insert into event_category (category_title, image) values (?,?)";
    db.query(sqlQuery, [catData.category_title, catData.image], callback);
  },

  getCategory: (callback) => {
    const sqlQuery = "select * from event_category";
    db.query(sqlQuery, callback);
  },

  updateCategory: (id, updatedCategory, callback) => {
    const sqlQuery =
      "update event_category set category_title = ?, image = ? where id = ?";
    db.query(
      sqlQuery,
      [updatedCategory.category_title, updatedCategory.image, id],
      callback
    );
  },

  deleteCategory: (id, callback) => {
    const sqlQuery = "delete from event_category where id = ?";
    db.query(sqlQuery, id, callback);
  },
};

module.exports = Category;
