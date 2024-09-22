
const express = require('express');
const router = express.Router();
const patientController = require('../controller/AdminAllPatientController');

router.get('/', patientController.getAllPatients);
router.get('/count', patientController.getPatientCount);
router.put('/approval', patientController.updateApprovalStatus);

module.exports = router;
