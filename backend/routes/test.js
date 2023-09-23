const express= require('express');
const quesmod= require('../model/question');
const connectMongo = require("../config/database");
connectMongo();
let rid=0;
let co=0;
const router = express.Router();
const auth = require('../middleware/auth');
router.get('/:id', auth, async (req, res) => {
    const qid = req.body.id;
     rid =qid;
    try {
      const ques = await quesmod.findById(qid);
      if (!ques) {
        return res.status(404).send(' not found');
      }
      res.json(ques);
        
    } catch (error) {
      console.error('Error sending q:', error);
      res.status(500).send('Error sending q');
    }
  })
  router.post('/:id',auth,async(req,res) =>{
    try {
      const userAnswerIndex = req.body.userAnswerIndex;
  
      const question = await quesmod.findById(rid);
  
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      const isCorrect = userAnswer === question.correctOptionIndex;
      res.json({ isCorrect });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
    

  module.exports = router;