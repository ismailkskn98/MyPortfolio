const Hero = require("../models").Hero;
const About = require("../models").About;
const Skill = require("../models").Skill;
const fs = require("fs");
const path = require("path");

// Hero - Kişisel Bilgiler
exports.get_hero = async (req, res) => {
  try {
    // Hero'yu veritabanından ıd'ye göre al
    const hero = await Hero.findOne({ order: [["id", "DESC"]], raw: true });
    // Eğer hero yoksa hata döndür
    if (!hero) {
      return res.status(401).send({
        message: "Hero Bulunamadı. Lütfen daha sonra tekrar deneyin.",
        success: false,
        error: true,
      });
    }
    // hero varsa gönder
    return res.send(hero);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    return res.status(500).send({
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
      return res
        .status(401)
        .send({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
    }

    // başarılı
    return res.send({ message: "Kullanıcı başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

// About - Hakkimda
exports.get_about = async (req, res) => {
  try {
    // about veritabanından al
    const about = await About.findOne({
      order: [["id", "DESC"]],
      raw: true,
    });

    // veritabanında bulunadıysa hata mesajı
    if (!about) {
      return res.status(401).send({
        message: "Hakkımda bulunamadı, Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // about var ise
    return res.send(about);
  } catch (error) {
    return res.status(500).send({
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
      return res
        .status(401)
        .send({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
    }
    // başarılı
    return res.send({ message: "Hakkımda başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

// Skills - Yetenekler
exports.get_skills = async (req, res) => {
  try {
    // veritabanından yetenekleri al
    const skills = await Skill.findAll({
      attributes: ["id", "name", "image"],
      raw: true,
    });

    // eğer bulamazsak hata döndürelim
    if (!skills) {
      return res.status(401).send({
        message: "Yetenekler bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }

    // veritabanında bulunduysa
    return res.send(skills);
  } catch (error) {
    // sunucu hatası
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
exports.get_skillById = async (req, res) => {
  const { id } = req.params;
  try {
    // veritabanından id'ye göre yeteneği al
    const skill = await Skill.findOne({ where: { id }, raw: true });
    // yetenek yok ise
    if (!skill) {
      return res.status(401).send({
        message: "Yetenek bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // yetenek bulunduysa
    return res.send(skill);
  } catch (error) {
    // sunucu hatası
    res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.",
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
      return res.status(401).send({
        message: "Yetenek eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // ekleme başarılı ise
    return res.send({ message: "Yetenek başarıyla eklendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};
exports.put_skillById = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  let image = req.body.currentImage;
  if (req.file) {
    image = "images/" + req.file.filename;
    const oldImagePath = path.resolve(__dirname, "..", "public", req.body.currentImage);
    fs.unlink(oldImagePath, (err) => {
      if (err) {
        console.error("Eski dosya silinemedi: ", err);
        return res.status(500).send({
          message: "Eski dosya silinirken bir hata oluştu.",
          success: false,
          error: true,
        });
      }
    });
  }
  try {
    // veritabanında ıd'ye göre image ve name alanlarını güncelle
    const skill = await Skill.update({ image, name }, { where: { id } });
    // skill yoksa
    if (!skill) {
      return res.status(401).send({
        message: "Yetenek bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // skill var ise
    return res.send({ message: "Yetenek başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.",
    });
  }
};
exports.delete_skillById = async (req, res) => {
  const { id } = req.params;

  try {
    // veritabanında id'ye göre yeteneği sil
    const skill = await Skill.destroy({
      where: { id },
    });

    // skill yok ise
    if (!skill) {
      return res.status(401).send({
        message: "Yetenek bulunmadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // fs.unlink('public/images/')
    // skill var ise
    return res.send({ message: "Yetenek başarıyla silindi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.",
    });
  }
};
