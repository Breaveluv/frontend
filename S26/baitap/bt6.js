function convert(arr) {
    for (let index in arr) {
        arr[index] = arr[index].split("-").reverse().join("/");
        console.log(arr[index]);
    }
    console.log(arr);
}
let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
convert(arr);