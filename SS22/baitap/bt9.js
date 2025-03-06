let arr = [1, 3, 5, 7, 3, 3, 1, 7, 8, 5];
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        if (i == j) {
            continue;
        } else {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
}
arr.sort()
document.write(arr);