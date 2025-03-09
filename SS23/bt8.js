let n = +prompt("Nhập số phần tử trong chuỗi: ");
let result = 0;
if (n > 0) {
    let count = 0;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("nhập phần tử cho mảng: ");
    }
    for (let i = 2; i < (n - 1); i++){
        if (arr[i] != arr[i - 1] + arr[i - 2]) {
            count++;
        }
    }
    count == 0 ? document.write("đây là dãy fibonacci") : document.write("đây không phải là dãy fibonacci");
}


else if (n == 0) {
    document.write("không có ký tự số");
}
else {
    document.write("độ dài không hợp lệ");
} 