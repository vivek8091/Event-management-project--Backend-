const adminModel = require("../models/adminModel");

exports.createAdmin = (req, res) => {
  const { name, email, password } = req.body;
  const image = req.file ? req.file.filename : null;
  const adminData = {
    name,
    email,
    password,
    image,
  };

  adminModel.addAdmin(adminData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not add admin!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "Admin added successfully...",
        data: result,
      });
    }
  });
};

exports.getAdminData = (req, res) => {
  adminModel.getAdmin((err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not fetch admin!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "admin data fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateAdmin = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const image = req.file ? req.file.filename : null;
  const updatedAdmin = {
    name,
    email,
    image,
  };

  adminModel.updateAdmin(id, updatedAdmin, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not update admin!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "admin data updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteAdmin = (req, res) => {
  const id = req.params.id;
  adminModel.deleteAdmin(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete admin!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "admin data deleted successfully...",
        data: result,
      });
    }
  });
};
