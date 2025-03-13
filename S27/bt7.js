

function findMissingNumber(arr) {
let sum = 0;
let n = arr.length + 1;
let total = n * (arr[0] + arr[n - 2]) / 2;
for (let i = 0; i < arr.length; i++) {
 sum += arr[i];


}
return total - sum;
}
console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8])); 
