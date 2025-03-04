// Nhap vao so n hien thi day fibonaci
// Buoc 1: Cho nguoi dung nhap vao n
let n = Number(prompt("Nhap vao so n"));
// Buoc 2: Khai bao 2 bien bang 0 va 1
let a = 0;
let b = 1;
// Buoc 3: Dung vong lap for de khoi tao day fibonaci va in ket qua
// 3.1 Dung vong lap for
for (let i = 0; i < n; i++) {
  // 3.2 Khai bao bien temp va khoi tao day fibonaci
  let temp = a + b;
  a = b;
  b = temp;
  // 3.3 In ra a
  console.log(a);
}
// let count = 0;
// while (count < n) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   console.log(a);
//   count++;
// }