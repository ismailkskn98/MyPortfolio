const Blog = require("../models").Blog;
const Category = require("../models").Category;
const User = require("../models").User;
const Hero = require("../models").Hero;
const About = require("../models").About;
const Skill = require("../models").Skill;
const Work = require("../models").Work;

// Anasayfa
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
        .send({ message: "blog bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }

    // Son blogu gönder
    return res.send({ data: lastBlog, success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};
exports.get_hero = async (req, res) => {
  try {
    const hero = await Hero.findOne({
      // Hero'yu veritabanından al
      order: [["id", "DESC"]],
      attributes: ["name", "job", "email", "freelancer", "city", "website"],
      raw: true,
    });

    // Eğer hero yoksa hata döndür
    if (!hero) {
      return res
        .status(401)
        .send({ message: "Hero Bulunamadı. Lütfen daha sonra tekrar deneyin." });
    }
    // hero varsa gönder
    return res.send({ data: hero, success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};
exports.get_about = async (req, res) => {
  try {
    // about veritabanından al
    const about = await About.findOne({
      order: [["id", "DESC"]],
      attributes: ["about"],
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
    return res.send({ data: about, success: true, error: false });
  } catch (error) {
    return res.status(500).json({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
      success: false,
      error: true,
    });
  }
};

// blog
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
    return res.send({ data: blogs, success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı döndürme
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};
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
    return res.send({ data: blog, success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    });
  }
};

// skills
exports.get_skills = async (req, res) => {
  try {
    // veritabanından yetenekleri çek
    const skills = await Skill.findAll({ raw: true });
    // yetenekler yok ise
    if (!skills) {
      res.status(401).send({
        message: "Yetenekler bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // yetenekler var ise
    return res.send({ data: skills, success: true, error: false });
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

// works
exports.get_works = async (req, res) => {
  try {
    // veritabanından work'leri al
    const works = await Work.findAll({
      attributes: ["url", "verticalImage", "horizontalImage"],
      raw: true,
    });
    // bulunamadıysa
    if (!works) {
      return res.status(401).send({
        message: "Yetenekler bulunamadı. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    // veritabanında var ise
    return res.send({ data: works, success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send({
      message:
        "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.",
      success: false,
      error: true,
    });
  }
};
