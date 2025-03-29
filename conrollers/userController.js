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
      res.status(201).json({
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
      return res.status(200).json({
        success: true,
        message: "successfully fetched data...",
        data: result,
      });
    }
  });
};

exports.updateUserData = (req, res) => {
  const { name, email, gender, mobile_no } = req.body;
  const id = req.params.id;
  const image = req.file ? req.file.filename : null;
  const is_blocked = req.body.is_blocked === "blocked" ? 1 : 0;

  const updatedData = {
    name,
    email,
    gender,
    mobile_no,
    image,
    is_blocked,
  };

  userModel.updateUser(id, updatedData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Data not updated!!!" });
    } else {
      return res
        .status(201)
        .json({
          success: true,
          message: "Data updated successfully...",
          data: result,
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
      return res
        .status(201)
        .json({
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
      return res.status(500).json({ success: false, message: "Could not add new event!!!"});      
    } else {
      return res.status(201).json({ success: true, message: "New event added successfully..." });
    }
  });
};
