const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questext: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOptionIndex: {
    type: Number,
    required: true,
  },
  answeExplaination: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  subtopic: {
    type: String,
    required: true,
    trim: true,
  },
  topicDifficulty: {
    type: String,
    required: true,
    trim: true,
  },
  qrank: {
    type: Number,
    required: true,
    trim: true,
  }
});

const question = mongoose.model('question', questionSchema);
module.exports = question

