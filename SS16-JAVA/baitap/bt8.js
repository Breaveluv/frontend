let numberA=Number(prompt("Nhap so thu 1"));
let numberB=Number(prompt("Nhap so thu 2"));
let numberC=Number(prompt("Nhap so thu 3"));
if(numberA>=numberB&&numberA>=numberC){
    document.write("so lon nhat là",numberA)
}else if(numberB>=numberA&&numberB>=numberC){
    document.write("so lon nhat là",numberB)
}else if(numberC>=numberA&&numberC>=numberB){
    document.write("So lon nhat là ",numberC)
}
