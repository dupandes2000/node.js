// Latihan 3: File Upload
// Buatlah endpoint untuk mengupload file
// 1. POST /upload: Menerima file dan menyimpannya di folder 'uploads'
// 2. GET /files: Menampilkan daftar file yang sudah diupload
// Gunakan multer untuk handle file upload
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const uploadDir = "2.3-upload-image/uploads";

// Pastikan folder "uploads" ada saat server dimulai
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Middleware upload
const upload = multer({ storage });

// Function untuk mengupload file
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "File tidak ditemukan" });
  }
  res.json({ message: "File berhasil diupload", filename: req.file.filename });
};

// Function untuk mendapatkan daftar file
const getFiles = (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Gagal membaca folder uploads" });
    }
    res.json({ files });
  });
};

// Route endpoints
router.post("/upload", upload.single("file"), uploadFile);
router.get("/list", getFiles);

module.exports = router;
