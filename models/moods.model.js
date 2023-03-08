// Schema

const mongoose = require("mongoose");

var moodsSchema = new mongoose.Schema(
  {
    // id is inbuilt for MongoDB so is not required here
    whatCheckbox: {
      type: String,
      default: false,
    },
    sulkyName: {
      type: Boolean,
      default: false,
    },
    delightedName: {
      type: Boolean,
      default: false,
    },
    indignantName: {
      type: Boolean,
      default: false,
    },
    cuddlyName: {
      type: Boolean,
      default: false,
    },
    outragedName: {
      type: Boolean,
      default: false,
    },
    proudName: {
      type: Boolean,
      default: false,
    },
    afraidName: {
      type: Boolean,
      default: false,
    },
    joyousName: {
      type: Boolean,
      default: false,
    },
    vigilantName: {
      type: Boolean,
      default: false,
    },
    grumblyName: {
      type: Boolean,
      default: false,
    },
    flatName: {
      type: Boolean,
      default: false,
    },
    melodramaticName: {
      type: Boolean,
      default: false,
    },
    protectiveName: {
      type: Boolean,
      default: false,
    },
    huffyName: {
      type: Boolean,
      default: false,
    },
    contendedName: {
      type: Boolean,
      default: false,
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
