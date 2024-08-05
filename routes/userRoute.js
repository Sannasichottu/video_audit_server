
const express = require('express');
const { loginUser, registerUser } = require('../controllers/userController');
const router = express.Router();

//routes
//method - login
router.post('/login',loginUser);

//method- register
router.post('/register', registerUser)

module.exports = router;