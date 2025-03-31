const express = require("express");
const app = express();
const port = 2121;
const userRoutes = require("./routes/userRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const gallaryRoutes = require("./routes/gallaryRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // Fixed the route path
  res.send("Server is running"); // Changed req.send to res.send
});

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/gallary", gallaryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
