const gallaryModel = require("../models/gallaryModel");

exports.addNewGallary = (req, res) => {
  const gallaryImage = req.file ? req.file.filename : null;
  const newGallary = {
    gallaryTitle: req.body.gallary_title,
    gallaryImage,
  };

  gallaryModel.addGallary(newGallary, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Could not add gallary successfully!!!",
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Gallary added successfully...",
        data: result,
      });
    }
  });
};

exports.getGallaryData = (req, res) => {
  gallaryModel.getGallaryData((err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not get gallary data!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "successfully fetched gallary data...",
        data: result,
      });
    }
  });
};

exports.updateGallaryData = (req, res) => {
  const id = req.params.id;
  const gallaryImage = req.file ? req.file.filename : null;
  const updatedGallaryData = {
    gallaryTitle: req.body.gallary_title,
    gallaryImage,
  };

  gallaryModel.updateGallary(id, updatedGallaryData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not update gallary data!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Gallary data updated successfully...",
        data: result,
      });
    }
  });
};

exports.deleteGallary = (req, res) => {
    const id = req.params.id;
  gallaryModel.deletGallary(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete gallary data!!!" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Gallary data deleted successfully..." });
    }
  });
};
