const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/"); // konum
  },
  filename: (req, file, cb) => {
    cb(null, "cv.pdf");
  },
});

const upload = multer({ storage: storage });

module.exports.upload = upload;
