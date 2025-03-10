/*
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
*/
let str = "";
let choice;
console.log(`1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình`);
do {
  choice = +prompt(`Moi ban nhap lua chon`);
  switch (choice) {
    case 1:
      str = prompt("Nhập chuỗi: ");
      break;
    case 2:
      console.log(str);
      break;
    case 3:
      console.log(str.length);
      break;
    case 4:
      let char = prompt("Nhập ký tự cần đếm: ");
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
          count++;
        }
      }
      console.log(count);
      break;
    case 5:
        let isSymmetry = true;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - 1 - i]) {
            isSymmetry = false;
            break;
            }
        }
        console.log(isSymmetry);
        break;
    case 6:
        let arr = str.split(" ");
        let str1 = "";
        for (let i = 0; i < arr.length; i++) {
            str1 += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
        }
        console.log(str1);
        break;
    default:
        break;
    }   
} while (choice != 7);