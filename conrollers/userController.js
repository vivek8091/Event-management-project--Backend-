const userModel = require("../models/userModel");

exports.registerUser = (req, res) => {
  const { name, email, gender, mobile_no, password } = req.body;
  const image = req.file ? req.file.filename : null;
  const is_blocked = req.body.action === "blocked" ? 1 : 0;
  const newUser = { name, email, gender, mobile_no, password, image, is_blocked };

  userModel.createUser(newUser, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Error registering user!!!",
          error: err,
        });
    } else {
      res.status(201).json({ success: true, message: "User registered successfully...", data: result });
    }
  });
};
