const router = require("express").Router();
const adminController = require("../controllers/admin.js");

router.get("/hero", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);
router.get("/about", adminController.get_about);
router.put("/about/:id", adminController.put_about);

module.exports = router;
