const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/myContact");

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact);

module.exports = router;
