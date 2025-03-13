
function maxNumber(n) {
    
    let arr = n.toString().split('');
    arr.sort((a, b) => b - a);
    return parseInt(arr.join(''));


}

console.log(maxNumber(976523));