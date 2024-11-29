const multer = require("multer");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid");

const destinationPath = path.join(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadFile = multer({
  storage: storage,
}).single("resume");

module.exports = uploadFile;
