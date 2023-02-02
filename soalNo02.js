// Buatlah program yang menerima input
// sebuah bilangan bulat `x` dan `y`, dan
// menghitung hasil `x` pangkat `y`.
// run dengan node js

// script untuk membuat inputan
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("nilai x = ", (x) => {
  x = parseInt(x);
  rl.question("nilai y = ", (y) => {
    y = parseInt(y);
    let hasil = 1;
    for (let i = 0; i < y; i++) {
      hasil = hasil * x;
    }
    console.log(x + " pangkat " + y + " = " + hasil);
    rl.close();
  });
});
