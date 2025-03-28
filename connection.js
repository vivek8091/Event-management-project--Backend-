const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "event_management_system",
});

conn.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected successfully...");
  }
});

module.exports = conn;
