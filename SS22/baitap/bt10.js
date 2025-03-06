console.log(`MENU\n`);
console.log(`1. Nhập vào mảng`);
console.log(`2. Hiển thị mảng`);
console.log(`3. Thêm phần tử`);
console.log(`4. Sửa phần tử`);
console.log(`5. Xóa phần tử`);
console.log(`6. Thoát`);

let arr = [];
while (true) {
    let choice = Number(prompt("Nhập lựa chọn: "));

    switch (choice) {
        case 1:
            let length = +prompt("Nhập độ dài của mảng: ");
            arr = new Array(length);
            for (let i = 0; i < length; i++) {
                arr[i] = prompt(`Nhập giá trị cho phần tử thứ ${i}: `);
            }
            console.log("Mảng đã nhập: ", arr);
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mảng rỗng, hãy nhập dữ liệu trước!");
            } else {
                console.log("Mảng hiện tại:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`arr[${i}] = ${arr[i]}`);
                }
            }
            break;

        case 3:
            let newValue = prompt("Nhập giá trị cần thêm: ");
            arr.push(newValue);
            console.log("Mảng sau khi thêm:", arr);
            break;

        case 4:
            let index = Number(prompt("Nhập vị trí cần sửa: "));
            if (index >= 0 && index < arr.length) {
                arr[index] = prompt("Nhập giá trị mới: ");
                console.log("Mảng sau khi sửa:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 5:
            let delIndex = Number(prompt("Nhập vị trí cần xóa: "));
            if (delIndex >= 0 && delIndex < arr.length) {
                arr.splice(delIndex, 1);
                console.log("Mảng sau khi xóa:", arr);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 6:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 6.");
    }

    if (choice === 6) break; 
}