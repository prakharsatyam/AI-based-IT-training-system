const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv').config();
const bodyparser = require("body-parser");
const connectMongo = require("./config/database");
const PORT = process.env.PORT || 5904;
const auth = require('./middleware/auth')
const Course = require("../model/course");
const router = express.Router();

connectMongo();
app.use(cors());

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    thumbnail: Object,
  });
  
  const Course = mongoose.model('Course', courseSchema);
  router.get('/courses', auth, async (req, res) => {
    try {
      const courses = await Course.find({}, 'title description thumbnail');
  
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



