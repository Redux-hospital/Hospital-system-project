
// routes/scheduleRoutes.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controller/scheduleController');

router.get('/', scheduleController.getSchedules);
router.get('/staff/:staffId', scheduleController.getScheduleByStaffId);
router.get('/date/:date', scheduleController.getScheduleByDate);
router.get('/count', scheduleController.getScheduleCount);
module.exports = router;