// Latihan 1: Express.js Basic Routing
// Buatlah aplikasi Express.js dengan routing berikut:
// 3. GET /users: Menampilkan daftar users (dari array)
// 4. POST /users: Menambah user baru ke array
// Gunakan array untuk menyimpan data user sementara

const express = require("express");
const router = express.Router();

let users = [{ name: "Dupandes Milenium", age: 25 }];

// Route untuk mendapatkan daftar users
router.get("/", (req, res) => {
  res.json(users);
});

// Route untuk menambah user baru
router.post("/", (req, res) => {
  const { nama, email } = req.body;
  if (!nama || !email) {
    return res.status(400).json({ error: "Nama dan email harus diisi" });
  }

  const newUser = {
    nama,
    age,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
