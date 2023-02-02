// Buatlah program yang menerima input sebuah `string`, dan mengecek apakah string tersebut merupakan `palindrome` atau tidak.
// run di node.js

// script membuat inputan node js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan sebuah string: ", (string) => {
  let isPalindrome = true;
  let stringLength = string.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (string[i] !== string[stringLength - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    console.log(`"${string}" adalah palindrome`);
  } else {
    console.log(`"${string}" bukan palindrome`);
  }
  rl.close();
});
