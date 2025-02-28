const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log('DATABASE CONNECTED!'.green);  // Green for success
    })
    .catch((error) => {
      console.error('DATABASE NOT CONNECTED!'.red, error);  // Red for error
    });
};

module.exports = connectDatabase;