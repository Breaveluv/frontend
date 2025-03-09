let n = +prompt("Nhập số phần tử trong chuỗi: ");
if (n > 0) {
    let arr = new Array(n);

   
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập phần tử cho mảng: ");
    }

    let result = []; 

   
    for (let i = 0; i < arr.length; i++) {
        
        let value = arr[i].trim(); 
        if (value && value !== "0" && value !== "false" && value !== "null" && value !== "undefined") {
            result.push(value); 
    }
}
    
    document.write("Mảng sau khi loại bỏ các phần tử falsy: " + result);
}else if (n == 0) {
    document.write("Không có ký tự số");
}
else {
    document.write("Độ dài không hợp lệ");
}
