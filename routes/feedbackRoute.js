const express = require('express');
const { createFeedback, getAllFeedback, getSingleFeedback } = require('../controllers/feedbackController');
const router = express.Router()


//routes
//method - create feedback form
router.post("/add",createFeedback );

//method - get all feedback
router.get('/getAll',getAllFeedback )

//method - get single feedback
router.get('/getFeedback/:id', getSingleFeedback );

module.exports = router
