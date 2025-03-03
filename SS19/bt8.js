let month=+prompt("Hãy nhập tháng bất kì");
if(month>=1&&month <= 3){
    document.write("Mùa xuân")
}else if(month>=4&&month<=6){
    document.write("Mùa hè")
}else if(month>=7&&month<=9){
    document.write("Mùa thu")
}else if(month>=10&&month<=12){
    document.write("Mùa Đông")
}else{
    document.write("Tháng không hợp lệ")
}