let number = +prompt("Nhập số bất kỳ");
let temp;
let result = "";

while (number > 0) {
    result = (number % 2 === 0 ? "0" : "1") + result; 
    temp = Math.floor(number / 2);
    number = temp;
}

document.write("Số nhị phân của số bạn vừa nhập là: " + result);