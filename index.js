const express = require("express");
const app = express();
const path = require('path');
const port = 2121;
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const gallaryRoutes = require("./routes/gallaryRoutes");
const categoryRoutes = require("./routes/categoryRoute");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const bookings = require("./routes/bookingsRoutes");
const contactListRoutes = require("./routes/contactListRoutes");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  // Fixed the route path
  res.send("Server is running"); // Changed req.send to res.send
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use("/api/users", userRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/gallary", gallaryRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings", bookings);
app.use("/api/contactList", contactListRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
