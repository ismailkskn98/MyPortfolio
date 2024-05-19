const router = require("express").Router();
const userController = require("../controllers/user.js");

router.get("/blogs/lastblog", userController.get_last_blog);
router.get("/blogs/:slug", userController.get_blog_by_slug);
router.get("/blogs", userController.get_blogs);
router.get("/hero", userController.get_hero);

module.exports = router;
