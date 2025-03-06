let arr = [1, 5, 7, 3, 7, 8, 3, 4, 2, 4];
let number = +prompt("nhap so bat ki: ");
let count = 0;
for (let num of arr) {
    if (number == num) {
        count++;
    }
}
document.write("So " + number + " xuat hien " + count + " lan");