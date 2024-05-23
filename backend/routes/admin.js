const router = require("express").Router();
const adminController = require("../controllers/admin.js");
const imageUpload = require("../helpers/image-upload.js");

router.get("/hero", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);

router.get("/about", adminController.get_about);
router.put("/about/:id", adminController.put_about);

router.get("/skills", adminController.get_skills);
router.post("/skill-create", imageUpload.upload.single("image"), adminController.post_skills);

module.exports = router;
