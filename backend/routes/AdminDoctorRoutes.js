const express = require('express');
const router = express.Router();
const adminController = require('../controller/AdminDoctorController');
const upload = require('../middleware/multerConfig');

router.post('/add-doctor', upload.single('profile_image'), adminController.addDoctor);

module.exports = router;