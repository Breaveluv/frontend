let arr = [];
let n = 0;
let choice;
console.log(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình`);
do {
  choice = +prompt(`Moi ban nhap lua chon`);
  switch (choice) {
    case 1:
      n = +prompt("Nhập độ dài cho mảng: ");
      for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Nhập giá trị cho arr[${i}]`);
      }
      break;
    case 2:
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 3:
      let maxIndex;
      let max = arr[0];
      let vitri;
      for (let i = 0; i, i < arr.length; i++) {
        if (arr[i] > max) {
            i=vitri;
            max = arr[i];
          maxIndex = i;
        }
      }
      console.log(`Số lớn nhất là ${max} tại vị trí${vitri}`);
      break;
    case 4:
        let sum=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>0){
                sum+=arr[i]
            }
        }
        let result=sum/arr.length;
        console.log(result);
        break;
      case 5:
     
      let reverse_str = arr.reverse();
      console.log(reverse_str);

      break;
    case 6:
        let count = 0;
        for(let i = 0;i<n/2;i++){
            arr[i] != arr[n-i-1]?count++:count;
        }
        count == 0 ? console.log("đây là mảng đối xứng"):console.log("đây không phải mảng đối xứng");
        break;
      break;

    default:
      break;
  }
} while (choice != 0);
