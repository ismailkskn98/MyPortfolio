const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Role = require("../models/role");

// kullanıcı girişi
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username })
    .select("username firstname lastname password email")
    .populate({ path: "role", select: "name -_id" });
  if (!user) {
    return res.status(404).send({ message: "Hatalı email veya parola", error: true, success: false });
  }

  const passwordMatch = await bcryptjs.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(404).send({ message: "Hatalı email veya parola", error: true, success: false });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role.name,
    },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true, // client tarafında çerezi kullanabilmek için
    path: "/",
    secure: false, // http - https
    sameSite: "Lax", // veya 'strict' olarak ayarlayabilirsiniz
    maxAge: 1000 * 60 * 60, // 1 saat süresince geçerli olacak
  });

  return res.send({ message: "Giriş Başarılı", data: token, error: false, success: true });
};

exports.verifyToken = async (req, res) => {
  return res.send({ message: "İşlem başarılı", data: req.user, error: false, success: true });
};
