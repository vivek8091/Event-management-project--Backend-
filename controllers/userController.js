const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "event_management_admin_9901";

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
      res.status(201).json({
        success: true,
        message: "User registered successfully...",
        data: result,
      });
    }
  });
};

exports.updateUserData = (req, res) => {
  const { name, email, gender, mobile_no } = req.body;
  const id = req.params.id;
  const image = req.file ? req.file.filename : null;

  const updatedData = {
    name,
    email,
    gender,
    mobile_no,
    image,
  };

  userModel.updateUser(id, updatedData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Data not updated!!!" });
    } else {
      userModel.getUserById(id, (err2, updatedUser) => {
        if (err2) {
          return res.status(500).json({
            success: false,
            message: "Could not fetch updated data!!!",
          });
        } else {
          return res.status(200).json({
            success: true,
            message: "Data updated successfully...",
            updatedUser: {
              id,
              name,
              email,
              gender,
              mobile_no,
              image,
            }, // Send full updated user data
          });
        }
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userModel.deleteUser(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete user data!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "User deleted successfully...",
        data: result,
      });
    }
  });
};

exports.addEvent = (req, res) => {
  const {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    category_name,
    event_location,
    event_description,
  } = req.body;
  const event_image = req.file ? req.file.filename : null;

  const newEvent = {
    event_title,
    event_start_date,
    event_end_date,
    event_start_time,
    event_end_time,
    event_price,
    category_name,
    event_location,
    event_description,
  };

  userModel.addEvent(newEvent, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not add new event!!!" });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "New event added successfully..." });
    }
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  userModel.loginUser(email, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Server error!!!" });
    }

    if (result.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Email not found!!!" });
    }

    const user = result[0];

    if (user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password!!!" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: "user",
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful...",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        mobile_no: user.mobile_no,
        image: user.image,
      },
    });
  });
};

exports.updatePassword = (req, res) => {
  const userId = req.params.id;
  const { oldPassword, newPassword } = req.body;

  userModel.getUserById(userId, (err, result) => {
    if (err || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    const user = result[0];

    if (user.password !== oldPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Old password is incorrect!" });
    }

    userModel.changePassword(userId, newPassword, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error while updating password!!!",
        });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Password updated successfully..." });
      }
    });
  });
};
