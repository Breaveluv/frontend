let canh1=+prompt("Moi ban nhap do dai canh thu nhat")
let canh2=+prompt("Moi ban nhap do dai canh thu hai")
let canh3=+prompt("Moi ban nhap do dai canh thu ba")
let a=canh1*canh1;
let b=canh2*canh2;
let c=canh3*canh3;
if(canh1==canh2&&canh2==canh3){
    document.write("tam giac đều")
}else if(canh1==canh2||canh2==canh3||canh1==canh3){
    document.write("đây là tam giác cân")
}else if(a == b+c||b == a+c||c == b+a){
    document.write("Đâu là tam giác vuông")

}else{
    document.write(`Đây là tam giác thường`)
}