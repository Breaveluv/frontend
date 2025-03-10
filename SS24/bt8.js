
let str = "";
let choice;
console.log(`1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình`);
do {
  choice = +prompt(`Moi ban nhap lua chon`);
  switch (choice) {
    case 1:
      str = prompt("Nhập chuỗi ký tự: ");
      break;
    case 2:
      console.log(str);
      break;
    case 3:
      let arr = str.split(" ");
      let count = 0;
      let arrResult = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j] && arrResult.indexOf(arr[i]) == -1) {
            arrResult.push(arr[i]);
            count++;
          }
        }
      }
      console.log(arrResult);
      console.log(count);
      break;
    case 4:
      let arr1 = str.split(" ");
      let max = arr1[0];
      let min = arr1[0];
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length > max.length) {
          max = arr1[i];
        }
        if (arr1[i].length < min.length) {
          min = arr1[i];
        }
      }
      console.log(max);
      console.log(min);
      break;
    case 5:
      let arr2 = str.split("");
      let count1 = 0;
      let arrResult1 = [];
      for (let i = 0; i < arr2.length; i++) {
        for (let j = i + 1; j < arr2.length; j++) {
          if (arr2[i] == arr2[j] && arrResult1.indexOf(arr2[i]) == -1) {
            arrResult1.push(arr2[i]);
            count1++;
          }
        }
      }
      console.log(arrResult1);
      console.log(count1);
      break;
    case 6:
      let arr3 = str.split(" ");
      let result = arr3.join("_");
      console.log(result);
      break;
  }
} while (choice != 7);