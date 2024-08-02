const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use("/api/contacts", require("./routes/contactRoute"));

app.listen(port, () => console.log(`Server running on port ${port}`));
