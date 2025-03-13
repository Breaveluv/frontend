
function sortEven(arr) {
    let even = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let index = 0;
    return arr.map(num => num % 2 === 0 ? even[index++] : num);
}
console.log(sortEven([5, 2, 8, 3, 1, 7, 10])); 