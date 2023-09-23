const mongoose = require('mongoose');
const user = require('./user');
const Question = require('./question');

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  responses: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      answers: [
        {
          question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question', 
          },
          selectedOption: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
  
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
