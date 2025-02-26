const express = require("express");
const requestLogger = require("./02-intermediate/2.1-middleware");
const mainRouter = require("./02-intermediate/2.2-routes/main");
const usersRouter = require("./02-intermediate/2.2-routes/users");
const productsRouter = require("./02-intermediate/2.2-routes/products");
const uploadImg = require("./02-intermediate/2.3-upload-image");

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Gunakan router
app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/files", uploadImg);

// Middleware 404 (Route tidak ditemukan)
app.use((req, res) => {
  res.status(404).json({ error: "Route tidak ditemukan" });
});

// Middleware untuk menangani error server (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Terjadi kesalahan pada server" });
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
