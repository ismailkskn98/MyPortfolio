const router = require('express').Router();
const userController = require('../controllers/user.js');

router.get('/blogs', userController.get_blogs);

module.exports = router;