// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminPrescriptionController = require('../controller/AdminPrescriptionController');

router.get('/prescriptions', adminPrescriptionController.getAdminPrescriptions);

module.exports = router;