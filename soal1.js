// (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
// - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif"
// - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
// Hint : gunakan rumus sqrt(x)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan angka: ', (input) => {
  const x = parseInt(input);

  if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
    rl.close();
    return;
  }

  if (x % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
    rl.close();
    return;
  }

  const result = Math.sqrt(x);
  console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
  rl.close();
});

