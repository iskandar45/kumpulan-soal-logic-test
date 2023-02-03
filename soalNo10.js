// Buatlah program yang menerima input sebuah `string`,
// dan mengeluarkan string tersebut dalam bentuk huruf `besar`.

//menggunakan inputan node js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan sebuah String : ", (string) => {
  const text = string.toUpperCase();
  console.log(text);
  readline.close();
});
