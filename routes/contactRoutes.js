const express = require("express");
const router = express.Router();
// const upload = require("../middleware/upload");
const contactController = require("../controllers/contactController");


router.post("/createContact", contactController.createContact);
router.get("/getContact", contactController.getContact);
router.put("/updateContact/:id", contactController.updateContact);
router.delete("/deleteContact/:id", contactController.deleteContact);


module.exports = router;