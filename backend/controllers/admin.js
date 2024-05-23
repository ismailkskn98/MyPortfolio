const Hero = require("../models").Hero;
const About = require("../models").About;
const Skill = require("../models").Skill;

exports.get_hero = async (req, res) => {
  try {
    // Hero'yu veritabanından ıd'ye göre al
    const hero = await Hero.findOne({ order: [["id", "DESC"]], raw: true });
    // Eğer hero yoksa hata döndür
    if (!hero) {
      res.status(401).json({
        message: "Hero Bulunamadı. Lütfen daha sonra tekrar deneyin.",
        success: false,
        error: true,
      });
    }
    // hero varsa gönder
    return res.json(hero);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
exports.put_hero = async (req, res) => {
  const { id } = req.params;
  const { name, job, email, website, location, freelancer } = req.body;

  try {
    // Hero'yu veritabanından ıd'ye göre güncelle
    const hero = await Hero.update(
      { name, job, email, website, location, freelancer },
      {
        where: { id },
      }
    );

    // güncellemede bir hata olduysa
    if (!hero) {
      res
        .status(401)
        .json({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
    }

    // başarılı
    res.json({ message: "Kullanıcı başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

exports.get_about = async (req, res) => {
  try {
    // about veritabanından al
    const about = await About.findOne({
      order: [["id", "DESC"]],
      raw: true,
    });

    // veritabanında bulunadıysa hata mesajı
    if (!about) {
      res.status(401).send({
        message: "Hakkımda bulunamadı, Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // about var ise
    res.send(about);
  } catch (error) {
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
exports.put_about = async (req, res) => {
  const { id } = req.params;
  const { about } = req.body;
  try {
    // about veritabanından ıd'ye göre güncelle
    const aboutResponse = await About.update({ about }, { where: { id } });

    // güncellemede bir hata olduysa
    if (!aboutResponse) {
      res
        .status(401)
        .json({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
    }
    // başarılı
    res.json({ message: "Hakkımda başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

exports.get_skills = async (req, res) => {
  try {
    // veritabanından yetenekleri al
    const skills = await Skill.findAll({
      attributes: ["id", "name", "image"],
      raw: true,
    });

    // eğer bulamazsak hata döndürelim
    if (!skills) {
      res.status(401).send({
        message: "Yetenekler bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }

    // veritabanında bulunduysa
    res.send(skills);
  } catch (error) {
    // sunucu hatası
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
exports.post_skills = async (req, res) => {
  const image = req.file.filename;

  const name = req.body.name;
  const editImage = "images/" + image;
  try {
    // veritabanına yeni yeteneği ekle
    const skill = await Skill.create({ name, image: editImage });
    // eklemede bir sorun oluştuysa
    if (!skill) {
      res.status(401).send({
        message: "Yetenek eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // ekleme başarılı ise
    res.send({ message: "Yetenek başarıyla eklendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. ütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
