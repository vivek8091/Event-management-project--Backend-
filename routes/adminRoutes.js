const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const adminController = require("../controllers/adminController");

router.post("/addAdmin", upload.single("image"), adminController.createAdmin);
router.get("/getAdmin", adminController.getAdminData);
router.put("/updateAdmin/:id", upload.single("image"), adminController.updateAdmin);
router.delete("/deleteAdmin/:id", adminController.deleteAdmin);



module.exports = router;