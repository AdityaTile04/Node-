const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api/contacts", (req, res) => {
  res.send("Hello from contacts");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
