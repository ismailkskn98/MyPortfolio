const Hero = require("../models").Hero;
const About = require("../models").About;
const Skill = require("../models").Skill;
const Blog = require("../models").Blog;
const Category = require("../models").Category;
const fs = require("fs");
const path = require("path");
const slugField = require("../helpers/slugField");

const errorMessage = (hata) => {
  return {
    message: `${hata} Bulunamadı. Lütfen daha sonra tekrar deneyiniz.`,
    success: false,
    error: true,
  };
};
const serverErrorMessage = {
  message: "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
  success: false,
  error: true,
};

// Hero - Kişisel Bilgiler
exports.get_hero = async (req, res) => {
  try {
    // Hero'yu veritabanından ıd'ye göre al
    const hero = await Hero.findOne({ order: [["id", "DESC"]], raw: true });
    // Eğer hero yoksa hata döndür
    if (!hero) {
      return res.status(401).send(errorMessage("Hero"));
    }
    // hero varsa gönder
    return res.send(hero);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    return res.status(500).send(serverErrorMessage);
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
    return res.status(500).send(serverErrorMessage);
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
      return res.status(401).send(errorMessage("Hakkımda"));
    }
    // about var ise
    return res.send(about);
  } catch (error) {
    return res.status(500).send(serverErrorMessage);
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
    return res.status(500).send(serverErrorMessage);
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
      return res.status(401).send(errorMessage("Yetenek"));
    }

    // veritabanında bulunduysa
    return res.send(skills);
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.get_skillById = async (req, res) => {
  const { id } = req.params;
  try {
    // veritabanından id'ye göre yeteneği al
    const skill = await Skill.findOne({ where: { id }, raw: true });
    // yetenek yok ise
    if (!skill) {
      return res.status(401).send(errorMessage("Yetenek"));
    }
    // yetenek bulunduysa
    return res.send(skill);
  } catch (error) {
    // sunucu hatası
    res.status(500).send(serverErrorMessage);
  }
};
exports.post_skills = async (req, res) => {
  const name = req.body.name;
  const image = req.file.filename;
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
    return res.status(500).send(serverErrorMessage);
  }
};
exports.put_skillById = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  let image = req.body.currentImage;
  if (req.file) {
    const oldImagePath = path.resolve(__dirname, "..", "public", req.body.currentImage);
    image = "images/" + req.file.filename;
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
      return res.status(401).send(errorMessage("Yetenek"));
    }
    // skill var ise
    return res.send({ message: "Yetenek başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
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
      return res.status(401).send(errorMessage("Yetenek"));
    }
    // fs.unlink('public/images/')
    // skill var ise
    return res.send({ message: "Yetenek başarıyla silindi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};

// Blogs
exports.get_blogs = async (req, res) => {
  try {
    // veritabanından blogları getir
    const blogs = await Blog.findAll({
      attributes: ["id", "title", "subtitle", "userId"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    // bloglar bulunamadıysa
    if (!blogs) {
      return res.status(401).send(errorMessage("Blog"));
    }
    // bloglar bulunduysa
    return res.send(blogs);
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.get_blogById = async (req, res) => {
  const { id } = req.parms;
  try {
    // veritabanından id'ye göre blog'u al
    const blog = await Blog.findOne({ where: { id } });
    // blog bulunamadıysa
    if (!blog) {
      return res.status(401).send(errorMessage("Blog"));
    }
    // blog bulunduysa
    return res.send(blog);
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.post_blog = async (req, res) => {
  // frontend'den verilerin alınması
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  const userId = req.body.userId;
  const slug = slugField(title);

  // image kontrolü
  let image = "";
  if (req.file) {
    const oldImagePath = path.resolve(__dirname, "..", "public", "images", req.file.filename);
    image = "images/" + req.file.filename;

    // Dosyanın varlığını kontrol et
    if (fs.existsSync(oldImagePath)) {
      // Dosya mevcutsa sil
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.log("Eski dosya silinemedi.", err);
          return res.status(500).send({
            message: "Eski dosya silinirken bir hata oluştu.",
            success: false,
            error: true,
          });
        }
      });
    } else {
      console.log("Dosya mevcut değil.");
    }
  }

  try {
    // verilerin veritabanına eklenmesi
    const newBlog = await Blog.create({ title, subtitle, slug, description, image, userId });

    let categoryIds = JSON.parse(req.body.categoryIds);
    // kategorilerin kontrolü
    if (categoryIds !== undefined && categoryIds.length > 0) {
      await newBlog.addCategories(categoryIds);
    }

    // eklemesi sırasında bir hata oluştuysa
    if (!newBlog) {
      return res.status(401).send({
        message: "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }

    return res.send({ message: "Blog başarıyla eklendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.put_blogById = async (req, res) => {};
exports.delete_blogById = async (req, res) => {
  const { id } = req.params;
  try {
    // veritabanından id'ye göre blog'u sil
    const blog = await Blog.destroy({ where: { id } });
    // blog bulunamadıysa
    if (!blog) {
      return res.status(401).send(errorMessage("Blog"));
    }
    // blog bulunduysa
    return res.send({ message: "Blog başarıyla silindi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};

// Categories
exports.get_categories = async (req, res) => {
  try {
    // veritabanında kategorileri getir
    const categories = await Category.findAll({ attributes: ["id", "name"], raw: true });
    // kategori bulunamadıysa
    if (!categories) {
      res.status(401).send(errorMessage("Kategori"));
    }
    // kategori bulunduysa
    res.send(categories);
  } catch (error) {
    // sunucu hatası
    res.status(500).send(serverErrorMessage);
  }
};
