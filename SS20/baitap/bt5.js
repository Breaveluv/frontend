let numA=prompt("Nhap so a");
let numb=prompt("Nhap so b");
let result=numA;

for(let i = 0;i<numb-1;i++){
   result=result*numA;
}
document.write(result);
