


// Backend: doctorRoutes.js

const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');
const { authenticateDoctor } = require('../middleware/doctorMiddleware');
const upload = require('../middleware/multerConfig');

router.get('/profile', authenticateDoctor, doctorController.getDoctorProfile);
router.put('/profile', authenticateDoctor, doctorController.updateDoctorProfile);
router.put('/profile-image', authenticateDoctor, upload.single('profileImage'), doctorController.updateProfileImage);

module.exports = router;
