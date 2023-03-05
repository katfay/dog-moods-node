require("dotenv").config();

console.log("nodemon successfully started");

const express = require("express");
const app = express();
const port = 3000;
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
