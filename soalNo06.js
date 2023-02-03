// Buatlah program yang menerima input sebuah bilangan bulat `n`,
// dan menampilkan deret kelipatan 3 sebanyak `n` bilangan.

// jalankan dengan node js

// script input node js
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan bilang bulat : ", (angka) => {
  const n = parseInt(angka); // membuat inputan menjadi Integer
  const m = 3; // angka kelipatan bisa di rubah
  deretKelipatan(n, m);
  rl.close();
});

// code disini
// fungsi menampilkan deret kelipatan tiga
function deretKelipatan(n, m) {
  let deretKelipatan = 0;
  for (let i = m; i <= n; i += m) {
    deretKelipatan = i;
    console.log(deretKelipatan);
  }
}
