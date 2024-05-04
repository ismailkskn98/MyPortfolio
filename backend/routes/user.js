const router = require('express').Router();
const userController = require('../controllers/user.js');

router.get('/blogs/:slug', userController.get_blog_by_slug);
router.get('/blogs', userController.get_blogs);

module.exports = router;