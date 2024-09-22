
// admin-appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/AppointmentFormController');

// Apply authentication middleware to all routes
router.use(appointmentController.authenticateToken);

router.get('/doctors/:doctorId/available-slots', appointmentController.getAvailableSlots);
router.post('/appointments', appointmentController.bookAppointment);

module.exports = router;