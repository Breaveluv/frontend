
let str = "";
let str2 = "";
let choice;
console.log(`1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự 
3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào.
6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
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
      let count = 0;
      let count1 = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
          count++;
        } else {
          count1++;
        }
      }
      console.log(`Số lượng ký tự là số: ${count}`);
      console.log(`Số lượng ký tự là chữ: ${count1}`);
      break;
    case 4:
      let str1 = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
          str1 += str[i].toUpperCase();
        } else {
          str1 += str[i].toLowerCase();
        }
      }
      console.log(str1);
      break;
    case 5:
      str2 = prompt("Nhập chuỗi ký tự thứ 2: ");
      let str3 = "";
      let length = str.length > str2.length ? str.length : str2.length;
      for (let i = 0; i < length; i++) {
        str3 += str[i] + str2[i];
      }
      console.log(str3);
      break;
    case 6:
        let arr = str.split(" ");
        arr.sort((a, b) => a.length - b.length);
        console.log(arr);
        break;

    default:
      break;
    }

    } while (choice != 7);