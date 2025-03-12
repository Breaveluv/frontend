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
let result=str.map((num)=>num**2);
console.log(result);
let arr=result.filter((num)=>num%2==0);
console.log(arr);
