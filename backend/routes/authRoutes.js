

const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/status', authController.checkAuthStatus);

module.exports = router;