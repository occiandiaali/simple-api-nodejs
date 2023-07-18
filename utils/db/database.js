const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_URL);
    console.log("DB connection made!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
