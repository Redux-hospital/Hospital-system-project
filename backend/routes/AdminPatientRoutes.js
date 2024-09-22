const express = require('express');
const router = express.Router();
const patientController = require('../controller/AdminPatientController');
const upload = require('../middleware/multerConfig');

// Route to add a new patient
router.post('/', upload.single('profile_image'), patientController.addPatient);

module.exports = router;