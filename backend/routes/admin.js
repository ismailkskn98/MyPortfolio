const router = require('express').Router();
const adminController = require('../controllers/admin.js');

router.get('/', adminController.index);

module.exports = router;