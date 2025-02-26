// Latihan 1: Express.js Basic Routing
// Buatlah aplikasi Express.js dengan routing berikut:
// 1. GET /: Menampilkan "Selamat datang di API saya"
// 2. GET /about: Menampilkan informasi tentang API
const express = require("express");
const router = express.Router();

// Route untuk halaman utama
router.get("/", (req, res) => {
  res.send("Selamat datang di API saya");
});

// Route untuk halaman about
router.get("/about", (req, res) => {
  res.json({
    nama: "My API",
    versi: "1.0.0",
    deskripsi: "API sederhana untuk latihan Node.js",
  });
});

module.exports = router;
