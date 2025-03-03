let numA=+prompt("Nhập số thứ nhất")
let numB=+prompt("Nhập số thứ 2")
let numC=+prompt("Nhập số thứ 3")
if(numA>numB>numC){
    document.write(`${numA} là số lớn nhất`)
}else if(numB>numA>numC){
    document.write(`${numB} là số lớn nhất`)
}else{
    document.write(`${numC} là số lớn nhất`)
}