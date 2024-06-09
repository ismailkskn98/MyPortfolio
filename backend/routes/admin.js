const router = require("express").Router();
const adminController = require("../controllers/admin.js");
const imageUpload = require("../helpers/image-upload.js");

// Admin - Anasayfa
router.get("/blogs-count", adminController.get_blogsCount);

// Hero - Kişisel Bilgiler
router.get("/hero", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);

// About - Hakkimda
router.get("/about", adminController.get_about);
router.put("/about/:id", adminController.put_about);

// Skills - Yetenekler
router.get("/skills", adminController.get_skills);
router.get("/skills/:id", adminController.get_skillById);
router.post("/skill-create", imageUpload.upload.single("image"), adminController.post_skills);
router.put("/skills/:id", imageUpload.upload.single("image"), adminController.put_skillById);
router.delete("/skills/delete/:id", adminController.delete_skillById);

// Blogs
router.get("/blogs", adminController.get_blogs);
router.get("/blogs/:id", adminController.get_blogById);
router.post("/blog-create", imageUpload.upload.single("image"), adminController.post_blog);
router.put("/blogs/:id", imageUpload.upload.single("image"), adminController.put_blogById);
router.delete("/blogs/delete/:id", adminController.delete_blogById);

// Categories
router.get("/categories", adminController.get_categories);

// Works
router.get("/works", adminController.get_works);
router.get("/works/:id", adminController.get_workById);
router.post(
  "/work-create",
  imageUpload.upload.fields([
    { name: "verticalImage", maxCount: 1 },
    { name: "horizontalImage", maxCount: 1 },
  ]),
  adminController.post_work
);
router.put(
  "/works/:id",
  imageUpload.upload.fields([
    { name: "verticalImage", maxCount: 1 },
    { name: "horizontalImage", maxCount: 1 },
  ]),
  adminController.put_workById
);
router.delete("/works/delete/:id", adminController.delete_workById);

module.exports = router;
