const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/AdminApointmentPatientController');

router.get('/', appointmentController.getAppointments);
router.post('/cancel', appointmentController.cancelAppointment);
router.get('/count', appointmentController.getAppointmentCount);
module.exports = router;

