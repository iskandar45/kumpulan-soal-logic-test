// Buatlah program yang menerima input sebuah bilangan bulat `n`,
// dan menampilkan segitiga siku-siku sebanyak `n` baris.

// jalankan dengan node js

// script inputan node js
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nilai n : ", (num) => {
  const n = parseInt(num);

  segitigaSikuSiku(n); //memanggil fungsi logic

  rl.close();
});

// ini fungsi logic nya
function segitigaSikuSiku(n) {
  let row;
  for (let i = 0; i < n; i++) {
    row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
