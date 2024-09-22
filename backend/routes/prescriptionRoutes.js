const express = require('express');
const router = express.Router();
const prescriptionController = require('../controller/prescriptionController');
const {authenticateToken} = require('../middleware/authMiddleware');

router.get('/', authenticateToken, prescriptionController.getPrescriptions);

module.exports = router;