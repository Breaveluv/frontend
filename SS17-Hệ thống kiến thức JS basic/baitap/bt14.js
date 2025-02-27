let banKinh = +prompt("Nhập bán kính: ");
let chieuCao = +prompt("Nhập chiều cao: ");

let Sxq = 2 * Math.PI * banKinh * chieuCao;
let Stp = 2 * Math.PI * banKinh * (banKinh + chieuCao);
let V = Math.PI * Math.pow(banKinh, 2) * chieuCao;

document.write(
    "Diện tích xung quanh hình trụ là: " + Sxq + "<br>" +
    "Diện tích toàn phần hình trụ là: " + Stp + "<br>" +
    "Thể tích hình trụ là: " + V
);