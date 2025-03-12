let str = [];
let n = +prompt("Nhập số phần tử của mảng: ");
console.log(n);
for (let i = 0; i < n; i++) {
  str[i] = prompt("Nhập phần tử thứ " + i + " :");
  if (Array.isArray(str) == false) {
    console.log(`Du lieu khong hop le`);  
  } else if (str.length == 0) {
    
      console.log(`Mang rong`);
     
    }
  }
console.log(str);
let arr=str.filter((num)=>num>10);
console.log(arr);
