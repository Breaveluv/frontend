let n=+prompt("Nhập số lượng mảng ");
let arr=[];
let m=+prompt("Nhập số phần tử mảng");
for(let i=0;i<m;i++){
    let a=+prompt("Nhập số nguyên");
    arr.push(a);
}

function splitArray(arr,n){
    let result=[];
    for(let i=0;i<arr.length;i+=n){
        result.push(arr.slice(i,i+n));
    }
    return result;
}

console.log (splitArray(arr,n));
