const multer = require("multer");
const path = require("path");


// Storage Engine...
const storage = multer.diskStorage({
    destination: "./uploads/", // Folder to store images
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  // File Upload Middleware
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimeType = fileTypes.test(file.mimetype);
  
      if (extName && mimeType) {
        return cb(null, true);
      } else {
        return cb(new Error("Only images (JPG, PNG, GIF) are allowed!"));
      }
    },
  });

  module.exports = upload;