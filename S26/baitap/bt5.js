let arr = [10, 9, 5, 11, 24, 5, 23, 45, 81, 1];
let max = arr.reduce((acc, curr) => acc > curr ? acc : curr, arr[0]);
console.log(max);
console.log(arr.indexOf(max));