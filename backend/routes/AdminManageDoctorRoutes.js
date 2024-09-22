// Backend: routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/AdminManageDoctorController');

router.get('/staff', adminController.getAllStaff);
router.put('/staff/:id/approve', adminController.approveStaff);
router.get('/doctors/count', adminController.getDoctorCount);
module.exports = router;