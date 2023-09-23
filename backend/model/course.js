const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, 
  },
  studentsEnrolled: {
    type: Number,
    default: 0,
  },
  publishedDate: {
    type: Date,
    default: Date.now, 
  },
  price: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: Object,
    required: true,
  },
  videourl: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;