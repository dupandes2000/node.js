// Latihan 3: Membuat Server HTTP Sederhana
// Buatlah server HTTP sederhana yang menampilkan pesan
// "Selamat datang di server saya" di browser
// Petunjuk: Gunakan modul 'http'

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Selamat datang di server saya");
});
server.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
