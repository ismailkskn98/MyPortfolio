const router = require("express").Router();
const userController = require("../controllers/user.js");

// Anasayfa
router.get("/blogs/lastblog", userController.get_last_blog);
router.get("/hero", userController.get_hero);
router.get("/about", userController.get_about);

// blog
router.get("/blogs/:slug", userController.get_blog_by_slug);
router.get("/blogs", userController.get_blogs);

module.exports = router;
