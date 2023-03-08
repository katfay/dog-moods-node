// Schema

const mongoose = require("mongoose");

var moodsSchema = new mongoose.Schema(
  {
    // id is inbuilt for MongoDB so is not required here
    whatCheckbox: {
      type: String,
    },
    sulky: {
      type: String,
    },
    delighted: {
      type: String,
    },
    indignant: {
      type: String,
    },
    cuddly: {
      type: String,
    },
    outraged: {
      type: String,
    },
    proud: {
      type: String,
    },
    afraid: {
      type: String,
    },
    joyous: {
      type: String,
    },
    vigilant: {
      type: String,
    },
    grumbly: {
      type: String,
    },
    flat: {
      type: String,
    },
    melodramatic: {
      type: String,
    },
    protective: {
      type: String,
    },
    huffy: {
      type: String,
    },
    contended: {
      type: String,
    },
    date: {
      type: String,
      required: "This field is required",
    },
    notes: {
      type: String,
      required: "This field is required",
    },
    mood: {
      type: String,
      required: "This field is required",
    },
  },
  {
    versionKey: false,
  }
);

mongoose.model("Moods", moodsSchema);
