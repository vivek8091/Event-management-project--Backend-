const categoryModel = require("../models/categoryModel");

exports.createCategory = (req, res) => {
  const { category_title } = req.body;
  const image = req.file ? req.file.filename : null;
  const categoryData = {
    category_title,
    image,
  };

  categoryModel.addCategory(categoryData, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucess: false, message: "Could not add category!!!" });
    } else {
      return res.status(201).json({
        success: true,
        message: "New category added successfully...",
        data: result,
      });
    }
  });
};

exports.getCategoryData = (req, res) => {
  categoryModel.getCategory((err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not fetch category data!!!" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category data fetched successfully...",
        data: result,
      });
    }
  });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const { category_title } = req.body;
  const image = req.file ? req.file.filename : null;
  const updatedCategory = {
    category_title,
    image,
  };

  categoryModel.updateCategory(id, updatedCategory, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ sucess: false, message: "Could not update category!!!" });
    } else {
      return res
        .status(200)
        .json({
          success: true,
          message: "Category updated successfully...",
          data: result,
        });
    }
  });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  categoryModel.deleteCategory(id, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "Could not delete category!!!" });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "Category deleted successfully..." });
    }
  });
};
