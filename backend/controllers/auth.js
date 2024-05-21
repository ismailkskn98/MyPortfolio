const bcryptjs = require("bcryptjs");
const User = require("../models").User;
const Role = require("../models").Role;
const jwt = require("jsonwebtoken");

// Kullanıcı girişi
exports.login = async (req, res) => {
  // kullanıcı adı ve parola
  const { username, password } = req.body;
  try {
    // Veritabanında kullanıcıyı bulma
    const user = await User.findOne({
      where: { username },
      attributes: ["username", "firstname", "lastname", "password", "email"],
      include: [
        {
          model: Role,
          attributes: ["rolename"],
        },
      ],
    });

    // Kullanıcı yoksa hata döndür
    if (!user) {
      return res
        .status(400)
        .json({ message: "Hatalı email ya da parola", success: false, error: true });
    }

    // Parola kontrolü
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      // şifre eşleşmiyorsa
      return res
        .status(400)
        .json({ message: "Hatalı email ya da parola", success: false, error: true });
    }

    // JWT token oluşturma
    const token = jwt.sign(
      {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.Roles[0].rolename,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    // Token'ı Cookie'ye kaydetme
    res.cookie("token", token, {
      httpOnly: false, // client tarafında çerezi kullanabilmek için
      path: "/",
      secure: false, // http - https
      sameSite: "Lax", // veya 'strict' olarak ayarlayabilirsiniz
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 saat sonra sona erecek
    });

    // Başarılı giriş mesajını ve token'i döndürme
    res.json({ message: "Giriş başarılı", success: true, error: false, token });
  } catch (error) {
    // Sunucu hatası mesajı döndürme
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

// Token doğrulama
exports.verifyToken = async (req, res) => {
  // Doğrulanmış kullanıcı bilgileri
  res.json(req.user);
};
