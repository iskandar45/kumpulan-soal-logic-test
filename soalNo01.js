// Buatlah program yang menerima input sebuah bilangan bulat `n`, dan menampilkan deret fibonacci sebanyak `n` bilangan.
// run script dengan node.js

// script untuk membuat inputan
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Masukkan jumlah bilangan Fibonacci yang ingin ditampilkan: ",
  (n) => {
    n = parseInt(n);
    let hash = 0;
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
      hash = fib[i - 1] + fib[i - 2];
      fib.push(hash);
    }

    console.log(fib);
    rl.close();
  }
);
