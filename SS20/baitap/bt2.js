let numB=+prompt("Nhập 1 gtri");
if(Number.isInteger(numB)&&numB>0){
    for(let i=1;i<=numB;i++){
        (i%5==0)?console.log(i):console.log(" ")
    }
}