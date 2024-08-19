const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.js");

// Anasayfa
router.get("/blogs/last-blog", clientController.get_last_blog);
router.get("/hero", clientController.get_hero);
router.get("/about", clientController.get_about);
router.get("/blogs", clientController.get_blogs);
router.get("/blogs/:slug", clientController.get_blog_by_slug);
router.get("/skills", clientController.get_skills);
router.get("/works", clientController.get_works);
router.get("/users", clientController.get_users);
router.get("/search", clientController.get_search);

module.exports = router;
