const mongoose = require('mongoose');
const courseStatsticSchmea = new mongoose.Schema({
    percentageCompleted: {
        type: Number,
        required: true,
        trim: true,
      },
      topicsLeft: {
        type: [String],
        required: true,
        trim: true,
      },
      topicsunderstood: {
        type: [String],
        required: true,
        trim: true,
      },
      rateOfUnderstanding: {
        type: Number,
        required: true,
        trim: true,
      },
});
const courseStatstic = mongoose.model('courseStatistic',courseStatsticSchmea);