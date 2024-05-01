const router = require('express').Router();
const authController = require('../controllers/auth.js');

router.get('/login', authController.get_login),
router.post('/login', authController.post_login),
router.get('/signup', authController.get_signup),
router.post('/signup', authController.post_signup),
router.get('/logout', authController.logout),

module.exports = router;