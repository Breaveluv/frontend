let inputUser = Number(prompt("Nhap so tien")); 
let count = 0;
let money = 500000;
while (inputUser > 0) {
  count = Math.floor(inputUser / money); 
  if (count > 0) {
    console.log("count=>", count);
    inputUser = inputUser - count * money; 
  }
  console.log("inputUser=>", inputUser);
  if (money === 500000) {
    money = 200000;
  } else if (money === 200000) {
    money = 100000;
  } else if (money === 100000) {
    money = 50000;
  } else if (money === 50000) {
    money = 20000;
  } else if (money === 20000) {
    money = 10000;
  } else if (money === 10000) {
    money = 5000;
  } else if (money === 5000) {
    money = 2000;
  } else if (money === 2000) {
    money = 1000;
  }
}