// Latihan 4: Operasi Array
// Buatlah fungsi yang menerima array angka dan mengembalikan
// jumlah semua angka dalam array
// Contoh input: [1, 2, 3, 4, 5]
// Output yang diharapkan: 15

const arr = [1, 2, 3, 4, 5];
function hitungJumlah(arr) {
  const result = arr.reduce((total, num) => total + num, 0);
  return result;
}
console.log(hitungJumlah(arr));
