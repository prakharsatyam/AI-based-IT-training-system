const mongoose = require("mongoose");
const course = require('./course');
const { application } = require("express");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    },
    courses: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course',
      }
       ],
  token: {
    type: String,
  },
});
module.exports = mongoose.model("user", userSchema);
