// Schema

const mongoose = require("mongoose");

var moodsSchema = new mongoose.Schema(
  {
    // id is inbuilt for MongoDB so is not required here
    moodName: {
      type: Array,
      required: "This field is required",
    },
    date: {
      type: String,
      required: "This field is required",
    },
    notes: {
      type: String,
      required: "This field is required",
    },
    category: {
      type: String,
      required: "This field is required",
    },
  },
  {
    versionKey: false,
  }
);

mongoose.model("Moods", moodsSchema);
