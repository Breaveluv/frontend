let arr = [];
let n = 0;
let choice;
console.log(`1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
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
      alert(2111111111188);
      console.log(222222, arr.length);

      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    case 3:
      let maxIndex;
      let max = arr[0];
      let min = arr[0];
      let minIndex;
      for (let i = 0; i, i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex=i;
        }
    }
        for(let i = 0; i, i < arr.length; i++){
        if (arr[i] < min) {
          min = arr[i];
          minIndex=i;
        }
    }
      
      console.log(`Số lớn nhất là ${max}`);
      console.log(`Số nhỏ nhất là ${min}`);
      break;
    case 4:
        sum=0;
        for(let i=0;i,arr.length;i++){
            sum+=arr[i];
        }
        console.log(sum);
      break;
    case 5:
        let mind=+prompt(`Nhap so muon tim`);
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==mind){
                count++;
            }
        }
      break;
    case 6:
        console.log(arr.sort((a,b)=>a-b));
      break;
    case 0:
      break;
    default:
      break;
  }
} while (choice != 0);
