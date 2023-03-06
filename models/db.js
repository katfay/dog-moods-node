// Require the mongoose node module
const mongoose = require("mongoose");

// Use the mongoose module to connect to the relevant MongoDB Atlas database
mongoose.connect(
  // Can remove everything in connection string after mongodb.net if it helps
  // Currently connected to dogMoods3Cluster on MongoDB Atlas
  "mongodb+srv://mskatfay:duncanraccoon@dogmoods3cluster.hlk9cqo.mongodb.net/?retryWrites=true&w=majority",
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
