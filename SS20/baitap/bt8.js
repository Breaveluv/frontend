// Buoc 1: Cho nguoi dung nhap vao n
let n = Number(prompt("Nhap vao so n"));
// Buoc 2: Khai bao cac bien count = 0, number = 2
let count = 0;
let number = 2;
// Buoc 3: Dung vong lap while de in so nguyen to
// 3.1 Dung vong lap while thu nhat
while (count < n) {
  // 3.1.1 Khai bao bien kiem tra so nguyen to
  // 3.1.2 Khai bao bien dem i = 2
  let isPrime = true;
  let i = 2;
  //Dung vong lap while thu 2 de kiem tra so nguyen to
  while (i < number) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  // 3.1.3 Neu la so nguyen to thi to in ra va tang bien count len 1
  if (isPrime) {
    console.log(number);
    count++;
  }
  number++;
}
