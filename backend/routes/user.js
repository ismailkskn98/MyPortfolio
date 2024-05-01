const router = require('express').Router();
const userController = require('../controllers/user.js');

router.get('/', userController.index);

module.exports = router;