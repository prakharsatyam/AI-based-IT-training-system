const mongoose = require('mongoose');
const Question = require('./question');
const responseSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question', 
    required: true,
  },
  responseTime: {
    type: Number,
    required: true,
    trim:  true,
  },
    chosenOptionIndex: {
    type: Number,
    required: true,
  },
});

const Response = mongoose.model('Response', questionSchema);
module.exports = Response;