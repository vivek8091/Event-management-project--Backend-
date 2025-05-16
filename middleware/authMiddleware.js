const jwt = require("jsonwebtoken");
const SECRET_KEY = "event_management_admin_9901";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token not found!!!" });
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid token!!!" });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
