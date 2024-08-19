const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/"); // konum
  },
  filename: (req, file, cb) => {
    // ornek.jpg
    const extension = path.extname(file.originalname); // .jpg
    // ornek + ik + 12354252 + .jpg
    cb(null, path.basename(file.originalname, extension) + "-ik-" + Date.now() + extension);
  },
});

const upload = multer({ storage: storage });

module.exports.upload = upload;
