const express = require("express");
const router = express.Router();
const contactListController = require("../controllers/contactListController");

router.post("/createContactList", contactListController.createContactList);
router.get("/getContactList", contactListController.getContactList);
router.put("/updateContactList/:id", contactListController.updateContactList);
router.delete(
  "/deleteContactList/:id",
  contactListController.deleteContactList
);

module.exports = router;
