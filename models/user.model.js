const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: String,
  username: String,
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
