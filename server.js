const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
