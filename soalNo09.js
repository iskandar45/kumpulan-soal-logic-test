// Buatlah program yang menerima input sebuah bilangan bulat `x`, dan menampilkan faktorial `x`.
// menggunakan node js

// script inputan pada node js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Masukan nilai x : ", (num) => {
  let x = parseInt(num);
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  console.log(`nilai faktorial dari ${x}! adalah ${result}`);

  readline.close();
});
