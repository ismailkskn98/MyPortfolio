const Hero = require("../models").Hero;
const About = require("../models").About;
const Skill = require("../models").Skill;
const Blog = require("../models").Blog;
const Category = require("../models").Category;
const User = require("../models").User;
const Work = require("../models").Work;
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

// Admin - Anasayfa
exports.get_blogsCount = async (req, res) => {
  try {
    const blogCount = await Blog.count(); // kaç tane blog var
    console.log(blogCount);
    res.send({ data: { count: blogCount }, success: true, error: false });
  } catch (error) {
    // Sunucu hatası mesajı gönder
    return res.status(500).send(serverErrorMessage);
  }
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
    return res.send({ data: hero, success: true, error: false });
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
      return res.status(401).send({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
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
    return res.send({ data: about, success: true, error: false });
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
      return res.status(401).send({ message: "Güncelleme sırasında bir hata oluştu.", success: false, error: true });
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
    return res.send({ data: skills, success: true, error: false });
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
    return res.send({ data: skill, success: true, error: false });
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
    // veritabanında ilgili yeteneğin resmini al
    const skillImagePathname = await Skill.findOne({
      where: { id },
      attributes: ["image"],
      raw: true,
    });
    // veritabanında id'ye göre yeteneği sil
    const skill = await Skill.destroy({ where: { id } });

    // skill yok ise
    if (!skill) {
      return res.status(401).send(errorMessage("Yetenek"));
    }

    // image'i klasörden sil
    const imagePath = path.resolve(__dirname, "..", "public", skillImagePathname.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.log("Resim silinirken bir hata oluştu." + err);
        return res.status(500).res({
          message: "dosya silinirken bir hata oluştu.",
          errorMessage: err,
          error: true,
          success: false,
        });
      }
    });
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
      attributes: ["id", "title", "subtitle", "image", "userId"],
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
    return res.send({ data: blogs, success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.get_blogById = async (req, res) => {
  const { id } = req.params;

  try {
    // veritabanından id'ye göre blog'u alma
    const blog = await Blog.findOne({
      where: { id },
      attributes: ["id", "title", "subtitle", "slug", "description", "image", "userId"],
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["id", "username", "firstname", "lastname", "email"],
        },
      ],
    });

    // blog bulunamadıysa
    if (!blog) {
      return res.status(401).send(errorMessage("Blog"));
    }

    return res.send({ data: blog, success: true, error: false });
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
    image = "images/" + req.file.filename;
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
exports.put_blogById = async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const slug = slugField(title);
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  const userId = req.body.userId;
  let image = req.body.currentImage;
  // image dosyası gönderilmiş mi ?
  if (req.file) {
    const oldImagePath = path.resolve(__dirname, "..", "public", req.body.currentImage);
    image = "images/" + req.file.filename;

    // bu dosya eğer var ise
    if (fs.existsSync(oldImagePath)) {
      // dosyayı sil
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
  }

  try {
    // blog güncelle
    const blog = await Blog.update({ title, slug, subtitle, description, image, userId }, { where: { id } });
    // blog bulunamadıysa
    if (!blog) {
      res.status(401).send(errorMessage("Blog"));
    }

    // ilişkileri güncelle
    const blogCategories = await Blog.findByPk(id);
    const categoryIds = JSON.parse(req.body.categoryIds);
    await blogCategories.setCategories(categoryIds);

    // blog bulunduysa
    return res.send({ message: "Blog başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};

exports.delete_blogById = async (req, res) => {
  const { id } = req.params;
  try {
    // veritabanından ilgili resmi al
    const blogImagePathname = await Blog.findOne({
      where: { id },
      attributes: ["image"],
      raw: true,
    });

    // veritabanından ilgili bloğun ait olduğu kategorileri alma
    const blogCategories = await Blog.findOne({
      where: { id },
      include: [
        {
          model: Category,
          attributes: ["id"],
        },
      ],
    });

    // Blog bulunamadıysa
    if (!blogCategories) {
      return res.status(401).send(errorMessage("Blog"));
    }

    const categoryIds = [];
    blogCategories.Categories.forEach((category) => {
      categoryIds.push(category.id);
    });

    // ilişkileri sil
    await blogCategories.removeCategories(categoryIds);
    // veritabanından id'ye göre blog'u sil
    await Blog.destroy({ where: { id } });

    // image'i klasörden sil
    const imagePath = path.resolve(__dirname, "..", "public", blogImagePathname.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.log("Resim silinirken bir hata oluştu." + err);
        return res.status(500).send({
          message: "dosya silinirken bir hata oluştu.",
          errorMessage: err,
          error: true,
          success: false,
        });
      }
    });

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
    return res.send({ data: categories, success: true, error: false });
  } catch (error) {
    // sunucu hatası
    res.status(500).send(serverErrorMessage);
  }
};

// Works
exports.get_works = async (req, res) => {
  try {
    // veritabanından work'leri al
    const works = await Work.findAll({
      attributes: ["id", "url", "verticalImage", "horizontalImage"],
      raw: true,
    });
    // bulunamadıysa
    if (!works) {
      return res.status(401).send(errorMessage("İşler"));
    }
    // veritabanında var ise
    return res.send({ data: works, success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.get_workById = async (req, res) => {
  const { id } = req.params;

  try {
    const work = await findOne({
      where: { id },
      attributes: ["id", "url", "verticalImage", "horizontalImage"],
      raw: true,
    });
    // bulunamadıysa
    if (!work) {
      return res.status(401).send(errorMessage("İş"));
    }
    // veritabanında var ise
    return res.send({ data: work, success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.post_work = async (req, res) => {
  const url = req.body.url;
  let verticalImage = "";
  let horizontalImage = "";

  // resimlerin alınması
  if (req.file) {
    const verticalImage = "images/" + req.files["verticalImage"] ? req.files["verticalImage"][0].filename : null;
    const horizontalImage = "images/" + req.files["horizontalImage"] ? req.files["horizontalImage"][0].filename : null;
  }

  try {
    // veritabanına ekle
    const newWork = await Work.create({ url, verticalImage, horizontalImage });
    // hata kontrolü
    if (!newWork) {
      return res.status(401).send({
        message: "İş eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }
    return res.send({ message: "İş başarıyla eklendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.put_workById = async (req, res) => {
  const id = req.body.id;
  const url = req.body.url;
  let verticalImage = req.body.currentVerticalImage;
  let horizontalImage = req.body.currentHorizontalImage;
  const oldImagePathVerticalImage = path.resolve(__dirname, "..", "public", req.body.currentVerticalImage);
  const oldImagePathHorizontalImage = path.resolve(__dirname, "..", "public", req.body.currentHorizontalImage);
  if (req.file) {
    // image update
    if (req.files["verticalImage"] && req.files["horizontalImage"]) {
      // vertical ve horizontal image update
      verticalImage = "images/" + req.files["verticalImage"][0].filename;
      horizontalImage = "images/" + req.files["horizontalImage"][0].filename;

      // eski resimleri silme
      if (fs.existsSync(oldImagePathVerticalImage) || fs.existsSync(oldImagePathHorizontalImage)) {
        fs.unlink(oldImagePathVerticalImage, (err) => {
          if (err) {
            console.error("Eski dosya silinemedi: ", err);
            return res.status(500).send({
              message: "Eski dosya silinirken bir hata oluştu.",
              success: false,
              error: true,
            });
          }
        });
        fs.unlink(oldImagePathHorizontalImage, (err) => {
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
    } else if (req.files["verticalImage"]) {
      // verticalImage update
      verticalImage = "images/" + req.files["verticalImage"][0].filename;
      // eski resimleri silme
      if (fs.existsSync(oldImagePathVerticalImage)) {
        fs.unlink(oldImagePathVerticalImage, (err) => {
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
    } else {
      // horizontalImage update
      horizontalImage = "images/" + req.files["horizontalImage"][0].filename;
      // eski resimleri silme
      if (fs.existsSync(oldImagePathHorizontalImage)) {
        fs.unlink(oldImagePathHorizontalImage, (err) => {
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
    }
  }

  try {
    // veritabanını güncelle
    const work = await Work.update({ url, verticalImage, horizontalImage }, { where: { id } });

    // hata kontrolü
    if (!work) {
      return res.status(401).send({
        message: "Güncelleme sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        success: false,
        error: true,
      });
    }

    res.send({ message: "İş başarıyla güncellendi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
exports.delete_workById = async (req, res) => {
  const { id } = req.params;

  try {
    const work = await Work.findOne({ where: { id }, attributes: ["verticalImage", "horizontalImage"], raw: true });
    // veritabanından id'ye göre sil
    await Work.destroy({ where: { id } });
    // hata kontrolü
    if (!work) {
      return res.send(401).send(errorMessage("İş"));
    }

    // resimlerin silinmesi
    const verticalImagePath = path.resolve(__dirname, "..", "public", work["verticalImage"]);
    const horizontalImagePath = path.resolve(__dirname, "..", "public", work["horizontalImage"]);

    if (fs.existsSync(verticalImagePath) || fs.existsSync(horizontalImagePath)) {
      fs.unlink(verticalImagePath, (err) => {
        if (err) {
          console.error("Eski dosya silinemedi: ", err);
          return res.status(500).send({
            message: "Eski dosya silinirken bir hata oluştu.",
            success: false,
            error: true,
          });
        }
      });
      fs.unlink(horizontalImagePath, (err) => {
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

    return res.send({ message: "İş başarıyla silindi.", success: true, error: false });
  } catch (error) {
    // sunucu hatası
    return res.status(500).send(serverErrorMessage);
  }
};
