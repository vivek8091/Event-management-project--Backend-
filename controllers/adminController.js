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
    image: image === null ? undefined : image,
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

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  adminModel.login(email, (err, result) => {
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

    const admin = result[0];

    if (admin.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password!!!" });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful...",
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        image: admin.image,
      },
    });
  });
};

exports.updatePassword = (req, res) => {
  const adminId = req.params.id;
  const { oldPassword, newPassword } = req.body;

  adminModel.getAdminById(adminId, (err, result) => {
    if (err || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found!!!" });
    }

    const admin = result[0];

    if (admin.password !== oldPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Old password is incorrect!!!" });
    }

    adminModel.changePassword(adminId, newPassword, (err2, results) => {
      if (err2) {
        return res.status(500).json({
          success: false,
          message: "Error while changing password!!!",
        });
      } else {
        return res
          .status(200)
          .json({
            success: true,
            message: "Password updated successfully...",
            newPassword: newPassword,
          });
      }
    });
  });
};
