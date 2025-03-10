/*1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình*/
let arr = [];
let n = 0;
let m = 0;
let choice;
console.log(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể


6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`);
do {
  choice = +prompt(`Moi ban nhap lua chon`);
  switch (choice) {
    case 1:
      n = +prompt("Nhập số hàng: ");
      m = +prompt("Nhập số cột: ");
      for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
          arr[i][j] = +prompt(`Nhập giá trị cho arr[${i}][${j}]`);
        }
      }
      break;
    case 2:
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          console.log(arr[i][j]);
        }
      }
      break;
    case 3:
      let sum = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          sum += arr[i][j];
        }
      }
      console.log(sum);
      break;
    case 4:
      let max = arr[0][0];
      let maxIndex = [0, 0];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (arr[i][j] > max) {
            max = arr[i][j];
            maxIndex = [i, j];
          }
        }
      }
      console.log(`Số lớn nhất là ${max} tại vị trí ${maxIndex}`);
      break;
    case 5:
      let row = +prompt("Nhập hàng cần tính trung bình cộng: ");
      let sumRow = 0;
      for (let j = 0; j < m; j++) {
        sumRow += arr[row][j];
      }
      console.log(`Trung bình cộng hàng ${row} là ${sumRow / m}`);
      break;
    case 6:
      for (let i = 0; i < n; i++) {
        arr[i].reverse();
      }
      break;
    default:
      break;
  }
} while (choice != 7);
