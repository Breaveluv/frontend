let money=+prompt("nhap so tien can gui");
let month=+prompt("nhap so thang  gui");
let interest=+prompt("nhap so lãi xuất can gui");

for(let i=1;i<=month;i++){
    money+=money*interest/100
}
console.log(money);


