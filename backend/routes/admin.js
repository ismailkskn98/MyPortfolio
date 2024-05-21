const router = require("express").Router();
const adminController = require("../controllers/admin.js");

router.get("/hero/:id", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);
router.get("/about/:id", adminController.get_about);
router.put("/about/:id", adminController.put_about);

module.exports = router;
