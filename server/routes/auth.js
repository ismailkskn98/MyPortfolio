const router = require("express").Router();
const auth = require("../middlewares/auth");
const authController = require("../controllers/auth.js");

router.post("/login", authController.login);
router.get("/verify-token", auth, authController.verifyToken);

module.exports = router;
