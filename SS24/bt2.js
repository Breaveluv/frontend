let arr = [];
let n = 0;
let choice;
console.log(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
      let chan=[];
      let le=[];
      for(let i=0;i<arr.length;i++){
        if(i%2!=0){
            chan.push(i);
        }else {
            le.push(i);
        }

      }
      console.log(` Các phần tử số chẵn là ${chan}`);
      console.log(` Các phần tử số chẵn là ${le}`);
      break;
    case 4:
        sum =0;
        re
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]
        }
        let result=sum/arr.length;
        console.log(result);
      break;
    case 5:
        let delete12 =+prompt(`Nhap so muon xoa`) ;
        arr.splice(delete12,1);
        console.log(arr);

      break;
    case 6:
        
        let maxIndex;
            let max = 0;
            let maxsc = 0;
            for(let index in arr){
                if(arr[index]> max){
                    max = arr[index];
                    maxIndex = index;
                }
            }
            arr[maxIndex] = 0;
            max = arr[0];
            for (let num in arr){
                if (num>maxsc){
                    maxsc = num;
                }
            }
            console.log("Số lớn thứ 2 là: "+maxsc);
      break;
    
    default:
      break;
  }
} while (choice != 0);
