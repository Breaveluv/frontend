let arr = [1, 4, 7, 7,3,3, 3, 5, 7, 9, 3, 4];
let max = arr[0];
let countMax = 0;
for (let num of arr) {
    let count = 0;
    for (let numCp of arr) {
        if (num == numCp) {
            count++;
        }
    }
    if (count > countMax) {
        max = num;
        countMax = count;
    }
}
document.write(max, ", ", countMax);
