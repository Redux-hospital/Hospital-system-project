const express = require('express');
const router = express.Router();
const { adminLogin, adminLogout } = require('../controller/adminController');

router.post('/login', adminLogin);
router.post('/logout', adminLogout);

module.exports = router;