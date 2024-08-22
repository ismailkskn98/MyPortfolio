const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const imageUpload = require("../helper/image-upload");
// const cvUpload = require("../helper/cv-upload");

router.get("/blog-count", adminController.get_blog_count);
// router.post("/upload-cv", cvUpload.upload.single("cv"), adminController.post_upload_cv);

// Hero
router.get("/hero", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);
router.post("/hero-create", adminController.post_hero);

// About
router.get("/about", adminController.get_about);
router.put("/about/:id", adminController.put_about);

// Skills
router.get("/skills", adminController.get_skills);
router.get("/skills/:id", adminController.get_skillById);
router.post("/skill-create", imageUpload.upload.single("image"), adminController.post_skills);
router.put("/skills/:id", imageUpload.upload.single("image"), adminController.put_skillById);
router.delete("/skills/:id", adminController.delete_skillById);

// Blogs
router.get("/blogs", adminController.get_blogs);
router.get("/blogs/:id", adminController.get_blogById);
router.post("/blog-create", imageUpload.upload.single("image"), adminController.post_blog);
router.put("/blogs/:id", adminController.put_blogById);
router.delete("/blogs/:id", adminController.delete_blogById);

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
router.delete("/works/:id", adminController.delete_workById);

module.exports = router;

router.get("/categories", adminController.get_categories);
