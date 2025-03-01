let English=+prompt("Moi ban nhap diem Anh");
let Literature=+prompt("Moi ban nhap diem Anh");
let math=+prompt("Moi ban nhap diem Anh");
let result=(English+Literature+math)/3
if(result>=8){
    document.write("Giỏi");
}else if(result>6.5&&result<7.9){
    document.write("Khá");
}else if(result<6.4){
    document.write("Trung bình")
}else if(result<5){
    document.write("Yếu")
}
