// Require the mongoose node module
const mongoose = require("mongoose");

// Use the mongoose module to connect to the relevant MongoDB Atlas database
mongoose.connect(
  "",
  {
    useNewUrlParser: true,
  },
  // Show error message if mongoose can't connect to the MongoDB database
  (err) => {
    if (!err) {
      console.log("DB connection succeeded!");
    } else {
      console.log("Error in DB connection " + err);
    }
  }
);
