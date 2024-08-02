const express = require("express");
const router = express.Router();
const { getContact } = require("../controller/myContact");

router.route("/").get(getContact);

router.route("/").post((req, res) => {
  res.send("Create contacts");
});

router.route("/:id").get((req, res) => {
  res.send(`Get contacts ${req.params.id}`);
});

router.route("/:id").put((req, res) => {
  res.send(`Update contacts ${req.params.id}`);
});

router.route("/:id").delete((req, res) => {
  res.send(`delete contacts ${req.params.id}`);
});

module.exports = router;
