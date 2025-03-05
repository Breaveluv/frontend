
let n = Number(prompt("Nhap vao so n"));

let count = 0;
let number = 2;

while (count < n) {
 
  let isPrime = true;
  let i = 2;
 
  while (i < number) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  
  if (isPrime) {
    console.log(number);
    count++;
  }
  number++;
}
