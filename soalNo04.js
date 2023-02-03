// Buatlah program yang menerima input sebuah `array of integers`,
// dan menampilkan angka `terbesar` dari array tersebut

// run dengan node js

// script inputan pada node js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan array angka dipisah dengan koma (,): ", (arrInput) => {
  const arr = arrInput.split(",").map(Number);
  let angkaTerbesar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > angkaTerbesar) {
      angkaTerbesar = arr[i];
    }
  }
  console.log(
    `Pada array [${arr}]. Angka terbesarnya adalah: ${angkaTerbesar}`
  );

  rl.close();
});
