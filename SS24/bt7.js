/*
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
7. Thoát chương trình
*/
let str = "";
let choice;
console.log(`1. Nhập chuỗi  ký tự
2. Hiển thị chuỗi ký tự     
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
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
      console.log(str.trim());
      break;
    case 4:
        console.log(str.split("").reverse().join(""));
        break;
    case 5:
        let arr = str.split(" ");
        console.log(arr.length);
        break;
    case 6:
        let char = prompt("Nhập ký tự cần tìm: ");
        let charReplace = prompt("Nhập ký tự thay thế: ");
        let str1 = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == char) {
                str1 += charReplace;
            } else {
                str1 += str[i];
            }
        }
        console.log(str1);
        break;
    default:
        break;
    }
}
while (choice != 7);
 