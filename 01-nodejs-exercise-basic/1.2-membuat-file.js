// Latihan 2: Membuat File
// Buatlah program yang membuat file bernama 'catatan.txt'
// dengan isi "Ini adalah catatan pertama saya"

const fs = require("fs");
fs.writeFileSync("catatan.txt", "Ini adalah catatan pertama saya");
