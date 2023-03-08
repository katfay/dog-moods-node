// Require the mongoose node module
const mongoose = require("mongoose");

// Use the mongoose module to connect to the relevant MongoDB Atlas database
mongoose
  .connect(
    // Can remove everything in connection string after mongodb.net if it helps
    // Currently connected to dogMoods3Cluster on MongoDB Atlas
    "mongodb+srv://mskatfay:duncanraccoon@dogmoods3cluster.hlk9cqo.mongodb.net/dogMoods3",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database on main branch!");
    // other code that depends on the database connection
  })
  .catch((err) => {
    console.error("Error connecting to database on main branch", err);
  });

require("./moods.model");
