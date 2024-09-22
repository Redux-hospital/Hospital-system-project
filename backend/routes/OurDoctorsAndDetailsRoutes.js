// admin-doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controller/OurDoctorsAndDetailsController');
const upload = require('../middleware/multerConfig');
router.get('/doctors', doctorController.getAllDoctors);
router.get('/doctors/:id', doctorController.getDoctorById);
router.post('/doctors', upload.single('profile_image'), doctorController.addDoctor);
router.post('/contact-doctor', doctorController.contactDoctor);
module.exports = router;