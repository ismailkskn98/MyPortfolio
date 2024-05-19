const Hero = require("../models").Hero;

exports.get_hero = async (req, res) => {
  const { id } = req.params;

  try {
    // Hero'yu veritabanından ıd'ye göre al
    const hero = await Hero.findByPk(id, { raw: true });
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
    // Hero'yu veritabanından ıd'ye göre al
    const hero = await Hero.update(
      { name, job, email, website, location, freelancer },
      {
        where: { id },
      }
    );

    // hero bulunamadıysa
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
