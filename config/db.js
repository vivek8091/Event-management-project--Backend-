const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "event_management_system"
});

db.connect((err) => {
    if(err) {
        console.error("Database connection failed!!!", err.message);
    } else {
        console.log("Connected to MqSQL database...");
        
    }
});

module.exports = db;