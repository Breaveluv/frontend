let n=+prompt("nhap so phan tu muon them vao");
let count=0;
for(let i=1;i<=n;i++){
    let a=+prompt(`Phan tu thu ${i} muốn thêm vào là `);
    console.log(a);
    if(a<0){
        count++;
    }else if(n==0){
        console.log(`khong co so phần tử nào`);
    }
}
console.log(count);
