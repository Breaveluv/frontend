let NumA=+prompt("Hay nhap so bat kì")
if(NumA % 3==0&&NumA %5==0){
    document.write(`${NumA} Chia hết cho cả 3 và 5`)
}else{
    document.write(`${NumA} Không chia hết cho cả 3 và 5`)
}