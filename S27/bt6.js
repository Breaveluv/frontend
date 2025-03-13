
function checkProgression(arr) {
    let check = true;
    let diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            check = false;
            break;
        }
    }
    return check ? "Dãy số cấp số cộng" : "Không phải dãy số cấp số cộng";
}
console.log(checkProgression([1, 2, 3, 4, 5])); 
console.log(checkProgression([1, 3, 6, 10, 15])); 