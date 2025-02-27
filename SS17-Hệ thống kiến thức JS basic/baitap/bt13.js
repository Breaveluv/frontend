let numA= +prompt("moi ban nhap so tien");

let month=+prompt("moi ban nhap so tháng");
let tienLoi=numA+(numA*0.043*month/12)
let result=tienLoi.toLocaleString();
document.write("so tien nhan duoc la",result)