const Blog = require("../models/blog");
const Hero = require("../models/hero");
const Skill = require("../models/skill");
const Experience = require("../models/experience");
const User = require("../models/user");

// Anasayfa
exports.get_last_blog = async (req, res, next) => {
  const lastBlog = await Blog.findOne()
    .sort({ createdAt: -1 })
    .populate({
      path: "categories",
      select: "name -_id",
    })
    .populate({
      path: "user",
      select: "firstname",
    })
    .select("title subtitle slug createdAt");

  if (!lastBlog) {
    return res.status(404).send({ message: "Blog bulunamadı.", data: [], error: true, success: false });
  }
  return res.send({ message: "İşlem başarılı", data: lastBlog, error: false, success: true });
};

exports.get_hero = async (req, res) => {
  const hero = await Hero.find().select("name job email freelancer city website");
  if (hero.length === 0) {
    return res.send({ message: "Hero bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: hero, error: false, success: true });
};

exports.get_about = async (req, res) => {
  const about = await Hero.find().select("about -_id");
  if (about.length === 0) {
    return res.send({ message: "Hakkımda bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: about, error: false, success: true });
};

exports.get_skills = async (req, res) => {
  const skills = await Skill.find();
  if (skills.length === 0) {
    return res.send({ message: "Yetenek bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: skills, error: false, success: true });
};

exports.get_works = async (req, res) => {
  const experiences = await Experience.find().select("url name verticalImage horizontalImage");
  if (experiences.length === 0) {
    return res.send({ message: "Deneyim bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: experiences, error: false, success: true });
};

// Blogs
exports.get_blogs = async (req, res) => {
  const blogs = await Blog.find()
    .populate({ path: "user", select: "firstname" })
    .populate({ path: "categories", select: "name" });

  if (blogs.length === 0) {
    return res.send({ message: "Blog bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: blogs, error: false, success: true });
};

exports.get_blog_by_slug = async (req, res) => {
  const { slug } = req.params;
  const blog = await Blog.findOne({ slug })
    .populate({ path: "user", select: "firstname lastname" })
    .populate({ path: "categories", select: "name" })
    .select("title slug subtitle description createdAt");

  if (!blog) {
    return res.status(404).send({ message: "Blog bulunamadı.", data: null, error: true, success: false });
  }
  return res.send({ message: "İşlem başarılı", data: blog, error: false, success: true });
};

exports.get_users = async (req, res) => {
  const user = await User.find()
    .select("username firstname lastname password email")
    .populate({ path: "role", select: "name -_id" });
  if (user.length === 0) {
    return res.send({ message: "Hero bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: user, error: false, success: true });
};

exports.get_search = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    const blogs = await Blog.find();
    return res.send({ message: "İşlem başarılı", data: blogs, error: false, success: true });
  }

  // büyük/küçük harf duyarsız
  const regex = new RegExp(query, "i");

  const blogs = await Blog.find({
    $or: [{ title: regex }, { subtitle: regex }],
  })
    .sort({ createdAt: -1 }) // en son eklenen
    .limit(4) // en fazla 4 tane
    .select("title subtitle");

  if (blogs.length === 0) {
    return res.send({ message: "Blog bulunamadı.", data: [], error: false, success: true });
  }
  return res.send({ message: "İşlem başarılı", data: blogs, error: false, success: true });
};
