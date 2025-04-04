const contactListModel = require("../models/contactListModel");

exports.createContactList = (req, res) => {
  const { contact_name, contact_email, contact_no, contact_message } = req.body;
  const contactList = {
    contact_name,
    contact_email,
    contact_no,
    contact_message,
  };

  contactListModel.createContact(contactList, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not create contact!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "Contact created successfully",
        data: result,
      });
    }
  });
};

exports.getContactList = (req, res) => {
  contactListModel.getContactList((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Could not fetch data from contact list!!!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Contact list fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateContactList = (req, res) => {
  const id = req.params.id;
  const { contact_name, contact_email, contact_no, contact_message } = req.body;
  const updatedContact = {
    contact_name,
    contact_email,
    contact_no,
    contact_message,
  };

  contactListModel.updateContactList(id, updatedContact, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Could not update contact!!!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Contact updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteContactList = (req, res) => {
  const id = req.params.id;
  contactListModel.deleteContactList(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete contact!!!" });
    } else {
      return res
        .status(200)
        .json({
          success: true,
          message: "Contact deleted successfully...",
          data: result,
        });
    }
  });
};
