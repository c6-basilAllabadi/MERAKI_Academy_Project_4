const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect('mongodb://localhost:27017/project_04').then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
