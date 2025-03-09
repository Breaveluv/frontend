let n = +prompt("Nhập số phần tử trong chuỗi: ");
let result = 0;
if (n > 0) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("nhập phần tử cho mảng: ");
    }
    for (index in arr) {
        if (Number(arr[index]) < 0 || Number(arr[index]) > 0) {
            result += Number(arr[index]);
            
        }

    }
    document.write(result);
}
else if (n == 0) {
    document.write("không có ký tự số");
}
else {
    document.write("độ dài không hợp lệ");
}