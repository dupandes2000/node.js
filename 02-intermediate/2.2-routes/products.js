const express = require("express");
const router = express.Router();
const ProductManager = require("../2.4-products");

// 1. GET /products - Membaca semua produk
router.get("/", async (req, res) => {
  try {
    const products = await ProductManager.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil produk" });
  }
});

// 2. POST /products/search - Mencari produk berdasarkan ID
router.post("/search", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "ID produk wajib diisi" });

    const product = await ProductManager.getProductById(id);
    if (!product)
      return res.status(404).json({ error: "Produk tidak ditemukan" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan saat mencari produk" });
  }
});

// 3. POST /products/add - Menambah produk baru
router.post("/add", async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name && !price)
      return res.status(400).json({ error: "Nama dan harga wajib diisi" });

    const newProduct = await ProductManager.addProduct({ name, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Gagal menambahkan produk" });
  }
});

// 4. PUT /products/update - Memperbarui produk
router.put("/update", async (req, res) => {
  try {
    const { id, name, price } = req.body;
    if (!id || !name || !price)
      return res.status(400).json({ error: "ID, Nama, dan Harga wajib diisi" });

    const updatedProduct = await ProductManager.updateProduct({
      id,
      name,
      price,
    });
    if (!updatedProduct)
      return res.status(404).json({ error: "Produk tidak ditemukan" });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui produk" });
  }
});

// 5. DELETE /products/delete - Menghapus produk
router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "ID produk wajib diisi" });

    const isDeleted = await ProductManager.deleteProduct(id);
    if (!isDeleted)
      return res.status(404).json({ error: "Produk tidak ditemukan" });

    res.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: "Gagal menghapus produk" });
  }
});

module.exports = router;
