const router = require("express").Router();
const adminController = require("../controllers/admin.js");
const imageUpload = require("../helpers/image-upload.js");

// Hero - Kişisel Bilgiler
router.get("/hero", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);

// About - Hakkimda
router.get("/about", adminController.get_about);
router.put("/about/:id", adminController.put_about);

// Skills - Yetenekler
router.get("/skills", adminController.get_skills);
router.get("/skills/:id", adminController.get_skillById);
router.put("/skills/:id", imageUpload.upload.single("image"), adminController.put_skillById);
router.delete("/skills/:id", adminController.delete_skillById);
router.post("/skill-create", imageUpload.upload.single("image"), adminController.post_skills);

// Blogs
router.get("/blogs", adminController.get_blogs);
router.get("/blogs/:id", adminController.get_blogById);
router.post("/blogs", adminController.post_blog);
router.put("/blogs/:id", adminController.put_blogById);
router.delete("/blogs/:id", adminController.delete_blogById);

module.exports = router;
