// Require the express module
const express = require("express");

// Assign the variable "router" to the express Router function
var router = express.Router();

// Require the mongoose module
const mongoose = require("mongoose");

// May need to double check if it's "moods" per my MongoDB Atlas naming, or "Moods" for another naming convention/JS reason
const Moods = mongoose.model("Moods");

// Create an API endpoint ("/list")
// Get the list of moods
// This URI should match the endpoint in the fetch function in the frontend JS file
router.get("/list", (req, res) => {
  // Find the list of moods from (?the endpoint/the database collection)
  Moods.find((err, docs) => {
    if (!err) {
      // Send back the list of moods to the endpoint ("/list")
      res.send(docs);
    } else {
      // Show a specific error message if this function can't get/find the moods collection
      console.log(
        "Error in retrieval moodsController express get request find and send list of Moods : " +
          err
      );
    }
  });
});

// Handles the ID key - which comes in automatically from MongoDB
router.get("/:id", (req, res) => {
  Moods.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in retrieval moodsController express get request find by ID : " +
          err
      );
    }
  });
});
