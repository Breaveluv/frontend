

let n=prompt("Nhập số thứ nhất");
let m=prompt("Nhập số thứ hai");
let a=parseInt(n);
let b=parseInt(m);
let choice=prompt("1.Cộng hai số\n2.Trừ hai số\n3.Nhân hai số\n4.Chia hai số\n5.Thoát");
function checkNumber(n){
    if(isNaN(n)){
        return false;
    }
    return true;
}
function cong(a,b){
    return a+b;
}
function tru(a,b){
    return a-b;
}
function nhan(a,b){
    return a*b;
}
function chia(a,b){
    return a/b;
}
switch(choice){
    case "1":
       cong(a,b);
       console.log(cong(a,b));
        break;
    case "2":
        tru(a,b);
        console.log(tru(a,b));
        break;
    case "3":
        nhan(a,b);
        console.log(nhan(a,b));
        break;
    case "4":
        chia(a,b);
        console.log(chia(a,b));
        break;
    case "5":
        break;
    default:
        console.log("Nhập sai");
        break;
}
