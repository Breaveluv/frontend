let num = +prompt("Moi ban nhập số") 
let original = num; // Lưu số ban đầu
let reversed = 0;

// Tạo số đảo ngược
while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}

// Kiểm tra số đối xứng
if (original === reversed) {
    console.log("Là số đối xứng");
} else {
    console.log("Không phải số đối xứng");
}