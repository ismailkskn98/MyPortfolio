const bcryptjs = require("bcryptjs");
const slugify = require("../helper/slugify");
const path = require("path");
const fs = require("fs");
const logger = require("../helper/logger");
const Joi = require("joi");
const Hero = require("../models/hero");
const Blog = require("../models/blog");
const Category = require("../models/category");
const Skill = require("../models/skill");
const ExperienceSchema = require("../models/experience");

// Admin
exports.get_blog_count = async (req, res) => {
  const blogCount = await Blog.countDocuments();
  return res.send({ message: "İşlem başarılı", data: blogCount, error: false, success: true });
};

// exports.post_upload_cv = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ message: "Cv Bulunamadı", data: [], error: true, success: false });
//   }
//   res.status(200).send({ message: "CV başarıyla yüklendi", data: null, error: false, success: true });
// };

// Hero

exports.get_hero = async (req, res) => {
  const hero = await Hero.find().select("name job email freelancer city website");
  console.log("girdi");
  if (hero.length === 0) {
    return res.send({ message: "Hiç blog bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: hero, error: false, success: true });
};
exports.put_hero = async (req, res) => {
  const { name, job, email, freelancer, city, website } = req.body;

  const hero = await Hero.findById(req.params.id);
  if (!hero) {
    return res.status(404).send({
      message: "Hero bulunamadı.",
      data: null,
      error: true,
      success: false,
    });
  }

  hero.name = name || hero.name;
  hero.job = job || hero.job;
  hero.email = email || hero.email;
  hero.freelancer = freelancer || hero.freelancer;
  hero.city = city || hero.city;
  hero.website = website || hero.website;

  const updatedHero = await hero.save();
  res.send({ message: "İşlem başarılı", data: updatedHero, error: false, success: true });
};
exports.post_hero = async (req, res) => {
  const hero = new Hero({
    name: req.body.name,
    job: req.body.job,
    email: req.body.email,
    freelancer: req.body.freelancer,
    city: req.body.city,
    website: req.body.website,
    about: req.body.about,
  });
  await hero.save();
  res.send(hero);
};

// About
exports.get_about = async (req, res) => {
  const about = await Hero.find().select("about");
  if (about.length === 0) {
    return res.send({
      message: "Hakkımda bulunamadı.",
      data: [],
      error: false,
      success: true,
    });
  }
  return res.send({ message: "İşlem başarılı", data: about, error: false, success: true });
};
exports.put_about = async (req, res) => {
  const heroAbout = await Hero.findById(req.params.id).select("about");
  if (!heroAbout) {
    return res.send({
      message: "Hakkımda bulunamadı.",
      data: null,
      error: true,
      success: false,
    });
  }

  heroAbout.about = req.body.about || heroAbout.about;
  const updatedAbout = await heroAbout.save();
  return res.send({ message: "İşlem başarılı", data: updatedAbout, error: false, success: true });
};

// Skills
exports.get_skills = async (req, res) => {
  const skills = await Skill.find().select("name image");

  if (skills.length === 0) {
    return res.send({
      message: "Hiç yetenek bulunamadı.",
      data: [],
      error: false,
      success: true,
    });
  }
  return res.send({
    message: "İşlem başarılı",
    data: skills,
    error: false,
    success: true,
  });
};
exports.get_skillById = async (req, res) => {
  const skill = await Skill.findById(req.params.id);

  if (!skill) {
    return res.status(404).send({ message: "Yetenek bulunamadı", data: null, error: true, success: false });
  }
  return res.send({ message: "İşlem başarılı", data: skill, error: false, success: true });
};
exports.post_skills = async (req, res) => {
  const schema = Joi.schema({
    name: Joi.string().min(3).max(10).required(),
  });
  const name = req.body.name;
  const image = req.file.filename;
  const editImage = "images/" + image;

  const skill = await Skill.create({ name, image: editImage });
  const newSkill = await skill.save();

  res.status(201).send({
    message: "Skill başarıyla oluşturuldu.",
    data: newSkill,
    error: false,
    success: true,
  });
};
exports.put_skillById = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  let image = req.body.currentImage;

  // yeni dosya geldiyse eskisini siliyoruz
  if (req.file) {
    const oldImagePath = path.resolve(__dirname, "..", "public", req.body.currentImage);
    image = "images/" + req.file.filename;

    if (fs.existsSync(oldImagePath)) {
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          logger.error(`Eski dosya silinemedi: ${err}`);
          return res.status(500).send({
            message: "Eski dosya silinirken bir hata oluştu.",
            success: false,
            error: true,
          });
        }
      });
    }
  }

  const skill = await Skill.findById(id);
  if (!skill) {
    return skill.status(404).send({ message: "Yetenek bulunamadı", data: null, error: true, success: false });
  }

  skill.name = name ?? skill.name;
  skill.image = image ?? skill.image;
  const updatedSkill = await skill.save();
  return res.send({ message: "İşlem başarılı", data: updatedSkill, error: false, success: true });
};
exports.delete_skillById = async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return res.status(404).send({ message: "Yetenek bulunamadı", data: null, error: true, success: false });
  }
  const deletedSkill = await skill.deleteOne();
  return res.send({ message: "İşlem başarılı", data: deletedSkill, error: false, success: true });
};

// Blogs
exports.get_blogs = async (req, res) => {
  const blogs = await Blog.find().populate({ path: "user", select: "_id" }).populate({ path: "categories", select: "name" });

  if (blogs.length === 0) {
    return res.send({ message: "Blog bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: blogs, error: false, success: true });
};
exports.get_blogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id)
    .populate({ path: "user", select: "-password" })
    .populate({ path: "categories", select: "name" });

  if (!blog) {
    return res.status(404).send({ message: "Blog bulunamadı.", data: null, error: true, success: false });
  }
  return res.send({ message: "İşlem başarılı", data: blog, error: false, success: true });
};
exports.post_blog = async (req, res) => {
  const { title, subtitle, description, user, categories } = req.body;
  let image = "images/" + req.file.filename;
  const slug = slugify(`${title}-${Date.now()}`);

  const blog = await Blog.create({
    title,
    subtitle,
    slug,
    description,
    image,
    user,
    categories: JSON.parse(req.body.categories),
  });

  const newBlog = await blog.save();
  res.status(201).send({
    message: "Blog başarıyla oluşturuldu.",
    data: newBlog,
    error: false,
    success: true,
  });
};
exports.put_blogById = async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, description, user, categories } = req.body;
  const slug = slugify(title);
  let image = req.body.currentImage;

  if (req.file) {
    const oldImagePath = path.resolve(__dirname, "..", "public", image);
    image = "images/" + req.file.filename;

    if (fs.existsSync(oldImagePath)) {
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          logger.error(`Eski dosya silinemedi: ${err}`);
          return res.status(500).send({
            message: "Eski dosya silinirken bir hata oluştu.",
            success: false,
            error: true,
          });
        }
      });
    }
  }

  let blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).send({ message: "Blog bulunamadı", data: null, error: true, success: false });
  }

  blog.title = title ?? blog.title;
  blog.subtitle = subtitle ?? blog.subtitle;
  blog.slug = slug ?? blog.slug;
  blog.description = description ?? blog.description;
  blog.user = user ?? blog.user;
  blog.categories = categories ? JSON.parse(categories) : blog.categories;
  blog.image = image ?? blog.image;

  blog = await blog.save();
  return res.send({ message: "İşlem başarılı", data: blog, error: false, success: true });
};
exports.delete_blogById = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).send({ message: "Blog bulunamadı", data: null, error: true, success: false });
  }

  // { image: 'images/react-ik-1723918154544.svg' }
  const blogImagePathname = await Blog.findById(id).select("image -_id");
  const deletedBlog = await blog.deleteOne();

  const imagePath = path.resolve(__dirname, "..", "public", blogImagePathname.image);
  fs.unlink(imagePath, (err) => {
    if (err) {
      logger.error(`Resim silinirken bir hata oluştu: ${err}`);
      return res.status(500).send({
        message: "dosya silinirken bir hata oluştu.",
        errorMessage: err,
        error: true,
        success: false,
      });
    }
  });

  return res.send({ message: "İşlem başarılı", data: deletedBlog, success: true, error: false });
};

// Categories
exports.get_categories = async (req, res) => {
  const categories = await Category.find();
  if (categories.length === 0) {
    return res.send({ message: "Kategori bulunamadı", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: categories, error: false, success: true });
};

// Works
exports.get_works = async (req, res) => {
  const works = await ExperienceSchema.find().select("name url verticalImage horizontalImage");

  if (works.length === 0) {
    return res.send({ message: "İş bulunamadı", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: works, error: false, success: true });
};
exports.get_workById = async (req, res) => {
  const work = await ExperienceSchema.findById(req.params.id);

  if (!work) {
    return res.status(404).send({ message: "İş bulunamadı.", data: null, error: true, success: false });
  }
  return res.send({ message: "İşlem başarılı", data: work, error: false, success: true });
};
exports.post_work = async (req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  let verticalImage = "";
  let horizontalImage = "";

  if (req.files) {
    verticalImage = `images/${req.files["verticalImage"] ? req.files["verticalImage"][0].filename : null}`;
    horizontalImage = `images/${req.files["horizontalImage"] ? req.files["horizontalImage"][0].filename : null}`;
  }

  let work = await ExperienceSchema.create({
    name,
    url,
    verticalImage,
    horizontalImage,
  });

  work = await work.save();
  return res.send({ message: "İşlem başarılı", data: work, error: false, success: true });
};
exports.put_workById = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const url = req.body.url;

  let work = await ExperienceSchema.findById(id);
  if (!work) {
    return res.status(404).send({ message: "İş bulunamadı.", data: null, error: true, success: false });
  }

  const oldImagePathVerticalImage = path.resolve(__dirname, "..", "public", work.verticalImage);
  const oldImagePathHorizontalImage = path.resolve(__dirname, "..", "public", work.horizontalImage);
  // resim ve resimlerin kontrolleri
  if (req.files) {
    // image update
    if (req.files["verticalImage"] && req.files["horizontalImage"]) {
      // vertical ve horizontal image update
      work.verticalImage = "images/" + req.files["verticalImage"][0].filename;
      work.horizontalImage = "images/" + req.files["horizontalImage"][0].filename;

      // eski resimleri silme
      if (fs.existsSync(oldImagePathVerticalImage) || fs.existsSync(oldImagePathHorizontalImage)) {
        fs.unlink(oldImagePathVerticalImage, (err) => {
          if (err) {
            logger.error(`Eski dosya silinemedi: ${err}`);
            return res.status(500).send({
              message: "Eski dosya silinirken bir hata oluştu.",
              success: false,
              error: true,
            });
          }
        });
        fs.unlink(oldImagePathHorizontalImage, (err) => {
          if (err) {
            logger.error(`Eski dosya silinemedi: ${err}`);
            return res.status(500).send({
              message: "Eski dosya silinirken bir hata oluştu.",
              success: false,
              error: true,
            });
          }
        });
      }
    } else if (req.files["verticalImage"]) {
      console.log("girdi");
      // verticalImage update
      work.verticalImage = "images/" + req.files["verticalImage"][0].filename;
      console.log(work.verticalImage);
      console.log(oldImagePathVerticalImage);
      // eski resimleri silme
      if (fs.existsSync(oldImagePathVerticalImage)) {
        console.log("burada girdi");
        fs.unlink(oldImagePathVerticalImage, (err) => {
          if (err) {
            logger.error(`Eski dosya silinemedi: ${err}`);
            return res.status(500).send({
              message: "Eski dosya silinirken bir hata oluştu.",
              success: false,
              error: true,
            });
          }
        });
      }
    } else if (req.files["horizontalImage"]) {
      // verticalImage update
      work.horizontalImage = "images/" + req.files["horizontalImage"][0].filename;

      // eski resimleri silme
      if (fs.existsSync(oldImagePathHorizontalImage)) {
        console.log("burada girdi");
        fs.unlink(oldImagePathHorizontalImage, (err) => {
          if (err) {
            logger.error(`Eski dosya silinemedi: ${err}`);
            return res.status(500).send({
              message: "Eski dosya silinirken bir hata oluştu.",
              success: false,
              error: true,
            });
          }
        });
      }
    } else {
      work.horizontalImage = work.horizontalImage;
      work.verticalImage = work.verticalImage;
    }
  }

  work.name = name ?? work.name;
  work.url = url ?? work.url;

  work = await work.save();
  return res.send({ message: "İşlem başarılı", data: work, error: false, success: true });
};
exports.delete_workById = async (req, res) => {
  let work = await ExperienceSchema.findById(req.params.id).select("verticalImage horizontalImage");

  if (!work) {
    return res.status(404).send({ message: "İş bulunamadı.", data: null, error: true, success: false });
  }

  // resimlerin silinmesi
  const verticalImagePath = path.resolve(__dirname, "..", "public", work["verticalImage"]);
  const horizontalImagePath = path.resolve(__dirname, "..", "public", work["horizontalImage"]);

  if (fs.existsSync(verticalImagePath) || fs.existsSync(horizontalImagePath)) {
    fs.unlink(verticalImagePath, (err) => {
      if (err) {
        logger.error(`Eski dosya silinemedi: ${err}`);
        return res.status(500).send({
          message: "Eski dosya silinirken bir hata oluştu.",
          success: false,
          error: true,
        });
      }
    });
    fs.unlink(horizontalImagePath, (err) => {
      if (err) {
        logger.error(`Eski dosya silinemedi: ${err}`);
        return res.status(500).send({
          message: "Eski dosya silinirken bir hata oluştu.",
          success: false,
          error: true,
        });
      }
    });
  }

  work = await work.deleteOne();
  return res.send({ message: "İş başarıyla silindi.", data: work, success: true, error: false });
};
