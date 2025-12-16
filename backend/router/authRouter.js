const express = require('express');
const { registerUser, getUserInfo, loginUser } = require('../controller/authController');

const router = express.Router()

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

router.post('/userinfo', getUserInfo)

module.exports = router;