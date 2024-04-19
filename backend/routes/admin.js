const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.js');

router.get('/', adminController.index);

module.exports = router;