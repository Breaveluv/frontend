
  

let arr = [];
let choice; 
console.log(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều    
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
7. Thoát chương trình`);

do {       
    choice = +prompt(`Moi ban nhap lua chon`);
    switch (choice) {
        case 1:
        let row = +prompt("Nhập số hàng của mảng: ");
        let col = +prompt("Nhập số cột của mảng: ");
        for (let i = 0; i < row; i++) {
            arr[i] = [];
            for (let j = 0; j < col; j++) {
            arr[i][j] = +prompt(`Nhập phần tử thứ ${j + 1} của hàng ${i + 1}`);
            }
        }
        break;
        case 2:
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        break;
        case 3:
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            }
        }
        console.log(sum);
        break;
        case 4:
        let sum1 = 0;
        for (let i = 0; i < arr.length; i++) {
            sum1 += arr[i][i];
        }
        console.log(sum1);
        break;
        case 5:
        let sum2 = 0;
        for (let i = 0; i < arr.length; i++) {
            sum2 += arr[i][arr.length - 1 - i];
        }
        console.log(sum2);
        break;
        case 6:
        let choice1 = +prompt(`Bạn muốn tính trung bình cộng của hàng hay cột?
        1. Hàng
        2. Cột`);
        let sum3 = 0;
        let count = 0;
        if (choice1 == 1) {
            let row1 = +prompt("Nhập hàng cần tính trung bình cộng: ");
            for (let i = 0; i < arr[row1].length; i++) {
            sum3 += arr[row1][i];
            count++;
            }
        } else if (choice1 == 2) {
            let col1 = +prompt("Nhập cột cần tính trung bình cộng: ");
            for (let i = 0; i < arr.length; i++) {
            sum3 += arr[i][col1];
            count++;
            }
        }
        console.log(sum3 / count);
        break;
    }
} while (choice != 7);
