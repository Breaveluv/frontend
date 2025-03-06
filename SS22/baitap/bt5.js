let arr = [1, 3, 4, 8, 7];
let even = 0;
let odd = 0;

for (let num of arr) {
    num % 2 ? odd+=num : even+=num;
}
document.write("tong cac so le: "+odd+"<br>"+"tong cac so chan: "+even);