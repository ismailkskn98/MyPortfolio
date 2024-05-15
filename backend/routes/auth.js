const router = require('express').Router();
const authController = require('../controllers/auth.js');

router.post('/login', authController.post_login),

module.exports = router;