const router = require("express").Router();
const adminController = require("../controllers/admin.js");

router.get("/hero/:id", adminController.get_hero);
router.put("/hero/:id", adminController.put_hero);

module.exports = router;
