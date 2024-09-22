// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.get('/', contactController.getContacts);
router.get('/messages/count', contactController.getContactCount);
router.put('/respond', contactController.respondToContact);

module.exports = router;