const userModel = require("../models/userModel");

exports.registerUser = (req, res) => {
  const { name, email, gender, mobile_no, password } = req.body;
  const image = req.file ? req.file.filename : null;
  const is_blocked = req.body.is_blocked === "blocked" ? 1 : 0;
  const newUser = {
    name,
    email,
    gender,
    mobile_no,
    password,
    image,
    is_blocked,
  };

  userModel.createUser(newUser, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error registering user!!!",
        error: err,
      });
    } else {
      res
        .status(201)
        .json({
          success: true,
          message: "User registered successfully...",
          data: result,
        });
    }
  });
};

exports.getAllUsers = (req, res) => {
  userModel.getUsers((err, result) => {
    if (err) {
      console.log(err);
      
      return res
        .status(500)
        .json({ success: false, message: "Data did not get!!!" });
    } else {
      return res.status(200).json({ success: true, message: "successfully fetched data...", data: result});
    }
  });
};
