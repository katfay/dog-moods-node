// Schema

const mongoose = require("mongoose");

var moodsSchema = new mongoose.Schema(
  {
    // id is inbuilt for MongoDB so is not required here
    mood: {
      type: String,
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
    // The category is not specifically input by the user, but flows from choice of category (e.g. "mood" v "behaviour/action") - so this may not work, needs more experimentation
    // category: {
    //   type: String,
    //   required: "This field is required",
    // },
  },
  { versionKey: false }
);

mongoose.model("Moods", moodsSchema);
