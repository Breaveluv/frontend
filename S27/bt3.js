/*Xây dựng menu tính toán hình học, gồm các chức năng:

Tính diện tích hình tròn.
Tính chu vi hình tròn.
Tính diện tích hình chữ nhật.
Tính chu vi hình chữ nhật.
Thoát. */
console.log(`1.Tính diện tích hình tròn\n2.Tính chu vi hình tròn\n3.Tính diện tích hình chữ nhật\n4.Tính chu vi hình chữ nhật\n5.Thoát`);
let choice=prompt("Chọn chức năng");
function checkNumber(n){
    if(isNaN(n)){
        return false;
    }
    return true;
}
function tinhDienTichHinhTron(r){
    return Math.floor(3.14*r*r);
}
function tinhChuViHinhTron(r){
    return 2*3.14*r;
}
function tinhDienTichHinhChuNhat(a,b){
    return a*b;
}
function tinhChuViHinhChuNhat(a,b){
    return (a+b)*2;
}
switch(choice){
    case "1":
        let r=prompt("Nhập bán kính hình tròn");
        if(checkNumber(r)){
            tinhDienTichHinhTron(r);
            console.log(tinhDienTichHinhTron(r));
        }
        else{
            console.log("Nhập sai");
        }
        break;
    case "2":
        let r1=prompt("Nhập bán kính hình tròn");
        if(checkNumber(r1)){
            tinhChuViHinhTron(r1);
            console.log(tinhChuViHinhTron(r1));
        }
        else{
            console.log("Nhập sai");
        }
        break;
    case "3":
        let a=prompt("Nhập chiều dài hình chữ nhật");
        let b=prompt("Nhập chiều rộng hình chữ nhật");
        if(checkNumber(a)&&checkNumber(b)){
            tinhDienTichHinhChuNhat(a,b);
            console.log(tinhDienTichHinhChuNhat(a,b));
        }
        else{
            console.log("Nhập sai");
        }
        break;
    case "4":
        let a1=prompt("Nhập chiều dài hình chữ nhật");
        let b1=prompt("Nhập chiều rộng hình chữ nhật");
        if(checkNumber(a1)&&checkNumber(b1)){
            tinhChuViHinhChuNhat(a1,b1);
            console.log(tinhChuViHinhChuNhat(a1,b1));
        }
        else{
            console.log("Nhập sai");
        }
        break;
    case "5":
        break;
    default:
        console.log("Nhập sai");
        break;
}