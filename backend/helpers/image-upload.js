const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/"); // konum
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, extension) + "-" + "-ik-" + Date.now() + extension);
  },
});
const upload = multer({ storage: storage });

module.exports.upload = upload;
