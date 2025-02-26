// Latihan 5: Async/Await
// Buatlah fungsi async yang mensimulasikan mengambil data user
// dan mengembalikan object dengan nama dan email
// Gunakan setTimeout untuk mensimulasikan delay

async function ambilDataUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nama: "John Doe",
        email: "john@example.com"
      });
    }, 2000);
  });
}

async function tampilkanUser() {
  console.log("Mengambil data user...");
  const user = await ambilDataUser();
  console.log("Data user:", user);
}

tampilkanUser();
