const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authorization = req.header("Authorization");

  if (!authorization) {
    return res.status(401).send({
      message: "Authorization header eksik.",
      error: true,
      success: false,
    });
  }

  const token = authorization.split(" ");
  if (token.length !== 2 || token[0] !== "Bearer") {
    return res.status(401).send({
      message: "Authorization header formatı yanlış. <>Bearer Token<>",
      error: true,
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token[1], process.env.JWTPRIVATEKEY);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).send({ message: "Yetkilendirme Başarısız: Geçersiz token." });
  }
};
