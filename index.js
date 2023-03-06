require("dotenv").config();
console.log("nodemon successfully started");

require("./models/db");

const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const moodsController = require("./controller/moodsController");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  // res.json(req.body);
  res.send(`
        <p>dogMoods local server</p>
        <p>Click here to get access to the <a href="/moods/list">Database</a></p>`);
});

app.listen(3000, () => {
  console.log(`dogMoods server started on port 3000`);
});

app.use("/moods", moodsController);
