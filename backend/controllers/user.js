const Blog = require("../models").Blog;
const Category = require("../models").Category;
const User = require("../models").User;
const Hero = require("../models").Hero;
const path = require("path");
const multer = require("multer");

// Yüklenen dosyaların hedef dizini belirleme
const upload = multer({ dest: path.join(__dirname, "..", "public/images") });

// Tüm blogları getir
exports.get_blogs = async (req, res) => {
  try {
    // Tüm blogları veritabanından al
    const blogs = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });

    // Eğer hiç blog yoksa hata döndürür
    if (blogs.length === 0) {
      return res
        .status(404)
        .send({ message: "Hiç blog bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }

    // Blogları gönder
    res.send(blogs);
  } catch (error) {
    // Sunucu hatası mesajı döndürme
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};

// Slug'a göre blog getir
exports.get_blog_by_slug = async (req, res) => {
  const { slug } = req.params;
  try {
    // Slug'a göre blogu veritabanından alma
    const blog = await Blog.findOne({
      where: { slug },
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
        {
          model: User,
          attributes: ["firstname", "lastname"],
        },
      ],
      attributes: ["title", "slug", "subtitle", "description", "createdAt"],
    });

    // Eğer blog bulunamazsa hata döndür
    if (!blog) {
      return res
        .status(404)
        .send({ message: "Hiç blog bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }

    // Blogu yanıt olarak gönder
    return res.send(blog);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};

// Son blogu getir
exports.get_last_blog = async (req, res) => {
  try {
    // Son blogu veritabanından al
    const lastBlog = await Blog.findOne({
      order: [["id", "DESC"]],
      attributes: ["title", "subtitle", "slug", "createdAt"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
        {
          model: User,
          attributes: ["firstname"],
        },
      ],
    });

    // Eğer son blog yoksa hata döndür
    if (!lastBlog) {
      return res
        .status(404)
        .json({ message: "blog bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }

    // Son blogu gönder
    return res.json(lastBlog);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};

// Hero'yu getir
exports.get_hero = async (req, res) => {
  try {
    const hero = await Hero.findOne({
      // Hero'yu veritabanından al
      attributes: ["name", "job", "email", "freelancer", "location", "website"],
      raw: true,
    });

    // Eğer hero yoksa hata döndür
    if (!hero) {
      res.status(401).json({ message: "Hero Bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }
    // hero varsa gönder
    return res.json(hero);
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};
