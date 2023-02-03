// Buatlah program yang menerima input sebuah bilangan bulat `x`,
// dan mengecek apakah `x` merupakan bilangan prima atau tidak.

// run dengan node js
// script inputan node js
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan bilangan bulat : ", (angka) => {
  const x = parseInt(angka);
  let isPrime = true;

  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && x !== 1) {
    console.log(`${x} is a prime number.`);
  } else {
    console.log(`${x} is not a prime number.`);
  }

  rl.close();
});
