require("dotenv").config();

console.log("nodemon successfully started");

const mongoose = require("mongoose");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.json(req.body);
  res.send(`
        <p>dogMoods local server</p>
        <p>Click here to get access to the <a href="">Database</a></p>`);
});

app.listen(port, () => {
  console.log(`dogMoods server started on port ${port}`);
});
