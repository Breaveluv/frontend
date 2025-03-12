let arr = [];
let soNguyenTo = [];

let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    let num = +prompt("Nhập phần tử thứ " + i + " :");
    arr.push(num);
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num < 2) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) return false;
    }
    return true;
}

// Lọc số nguyên tố
soNguyenTo = arr.filter(isPrime);

if (soNguyenTo.length === 0) {
    console.log("Không có số nguyên tố trong mảng.");
} else {
    console.log("Các số nguyên tố trong mảng:", soNguyenTo);
}
