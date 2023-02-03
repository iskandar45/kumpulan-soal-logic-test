// Buatlah program yang menerima input sebuah bilangan bulat `n`,
// dan menampilkan `segitiga siku-siku terbalik` sebanyak `n` baris.

// program input dengan node js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan bilang bulat : ", (input) => {
  let n = parseInt(input);

  for (let i = n; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= i; j++) {
      s += "* ";
    }
    console.log(s);
  }
  rl.close();
});
