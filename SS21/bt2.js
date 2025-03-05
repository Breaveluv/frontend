let m=0;
let n=0;
for(let i =0 ; i<5;i++){
    let n1 =+prompt("Nhap so");
    if(n1 %2==0){
        m++;
    }else{
        n++;
    }

}
document.write(`co ${n} số lẻ`);
document.write(`co ${m} số chẵn`);