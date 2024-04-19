const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontend.js');

router.get('/', frontendController.index);

module.exports = router;