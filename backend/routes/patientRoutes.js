



const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientController');
const upload = require('../middleware/multerConfig');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/profile', authenticateToken, patientController.getProfile);
router.put('/profile', authenticateToken, patientController.updateProfile);
router.put('/profile-image', authenticateToken, upload.single('profileImage'), patientController.updateProfileImage);

module.exports = router;