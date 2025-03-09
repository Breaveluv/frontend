let n=+prompt("Moi ban nhap vao");
let count=0;

for(let i=1;i<=n;i++){
    let a=prompt(`Phan tu thu ${i} muốn thêm vào là `);
    
    if(a%1==0){
       console.log(a);
    }else {
        console.log(`khong co so`);
    }
    
}

