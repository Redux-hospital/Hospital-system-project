// messageRoutes.js
const express = require('express');
const { storeMessage } = require('../controller/messageController');

const router = express.Router();

// POST request to store the message
router.post('/', storeMessage);

module.exports = router;