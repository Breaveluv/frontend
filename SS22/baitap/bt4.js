let str = prompt("Mời bạn nhập một chuỗi bất kì: ");
let arr = str.split("");
let max = arr[0];
for(let i = 0;i<=arr.length;i++){
    if (arr[i] > max){
        max = arr[i];
    }
}
document.write("Số lớn nhất là: " + max);