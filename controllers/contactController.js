const contactModel = require("../models/contactModel");

exports.createContact = (req, res) => {
  const { name, email, country, phone_no, message } = req.body;
  const contactData = {
    name,
    email,
    country,
    phone_no,
    message,
  };

  contactModel.addContact(contactData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not add contact!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "Contact added successfully...",
        data: result,
      });
    }
  });
};

exports.getContact = (req, res) => {
  contactModel.getContact((err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not fetch contact!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Contact fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateContact = (req, res) => {
  const id = req.params.id;
  const { name, email, country, phone_no } = req.body;
  const updatedContact = {
    name,
    email,
    country,
    phone_no,
    message,
  };

  contactModel.updateContact(id, updatedContact, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not update contact!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Contact updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteContact = (req, res) => {
  const id = req.params.id;
  contactModel.deleteContact(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete contact!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Contact deleted successfully...",
        data: result,
      });
    }
  });
};
