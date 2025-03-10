/* 
1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý 
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố trong mảng và tính tổng 
6. Nhập một số và đếm số lần xuất hiện trong mảng
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
0. Thoát 
*/
let arr = [];
let n;
while (1) {
    console.log("======================MENU===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị của các phần tử. ");
    console.log("2. In ra giá trị các phần tử đang quản lý.");
    console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần.");
    console.log("4. In ra các giá trị lớn nhất, nhỏ nhất và vị trí của chúng.");
    console.log("5. In ra các số nguyên tố trong mảng và tính tổng.");
    console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng.");
    console.log("7. Thêm một phần tử vào vị trí chỉ định.");
    console.log("8. Xóa một phần tử theo giá trị.");
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.")
    console.log("0. Thoát.");
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            n = +prompt("Nhập độ dài cho mảng: ");
            arr = new Array(n);
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập giá trị cho arr[${i}]`);
            }
            break;
        case 2:
            for (let index in arr) {
                console.log(arr[index]);

            }
            break;  
        case 3:
            let i = 0;
            let arrEven = [];
            let sumEven = 0;
            for (let num of arr) {
                if (num % 2 == 0) {
                    console.log(num);
                    sumEven += num;
                    arrEven[i] = num;
                    i++;
                }
            }
            console.log(sumEven);
            console.log(arrEven.sort((a, b) => a - b).reverse());
            break;
        case 4:
            let maxIndex;
            let max = arr[0];
            let min = arr[0];
            let minIndex;
            for (let index in arr) {
                if (arr[index] > max) {
                    max = arr[index];
                    maxIndex = index;
                }
                if (arr[index] < min) {
                    min = arr[index];
                    minIndex = index;
                }
            }
            console.log(`Số lớn nhất là ${max}:arr[${maxIndex}]`);
            console.log(`Số nhỏ nhất là ${min}:arr[${minIndex}]`);
            break;
        case 5:
            let sumPrime = 0;
            for (let num of arr) {
                let count = 0;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0 && num != 1) {
                    console.log(num);
                    sumPrime += num;
                }
            }
            console.log(sumPrime);
            break;
        case 6:
            let number = +prompt("Nhập một số bất kì để kiểm tra: ");
            let count = 0;
            for (let num of arr) {
                num == number ? count++ : count;
            }
            console.log(`Số ${number} xuất hiện ${count} lần`);
            break;
        case 7:
            let addIndex = +prompt("Nhập vị trí bạn muốn thêm phần tử: ");
            let addItem = +prompt("Nhập phần tử bạn muốn thêm vào mảng: ");
            arr.splice(addIndex, 0, addItem);
            break;
        case 8:
            let deleteIndex = +prompt("Nhập vị trí bạn muốn xóa phần tử: ");
            arr.splice(deleteIndex, 1);
            break;
        case 9:
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i;j++){
                    if (arr[j] < arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log(arr);
            console.log(arr.reverse());
    }
    if (choice == 0) {
        break;
    }
}