let number = prompt("Nhập số bất kì: ");
let count = 0;
for(let i = 2; i < number ; i++){
    if (number % i == 0) {
        count++;
    }
}
if (count == 0) {
    document.write(number ," la so nguyen to");

} else {
    document.write(number ," khong la so nguyen to");
}