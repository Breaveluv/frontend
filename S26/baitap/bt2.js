let arri=[];
let n = +prompt("Nhập số phần tử của mảng: ");
for(let i=0;i<n;i++){
    arri[i]=prompt("Nhập phần tử thứ "+i+" :");
    if(Array.isArray(arri)==false){
        console.log(`Du lieu khong hop le`);
    }else if(arri.length==0){
        console.log(`Mang rong`);
    }
}
console.log(arri);
let arr=arri.filter((name)=>name.length>5);
console.log(arr);