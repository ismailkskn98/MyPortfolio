const jwt = require("jsonwebtoken");

// Middleware fonksiyonu: Kullanıcı yetkilendirme
const auth = (req, res, next) => {
  // İstek başlığından token'i al
  const token = req.header("Authorization").split(" ")[1];

  // Token kontrolü
  if (!token) {
    return res
      .status(401)
      .send({ message: "Yetkilendirme Başarısız: Token Bulunamadı.", success: false, error: true });
  }

  try {
    // Token doğrulama
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // doğru ise payload döndürür. Hata var ise catch'e girer
    // Doğrulanmış kullanıcı bilgisini istek nesnesine ekle
    req.user = decoded;
    next();
  } catch (error) {
    // Hata
    return res.status(401).send({ message: "Yetkilendirme Başarısız: Geçersiz token." });
  }
};

module.exports = auth;
