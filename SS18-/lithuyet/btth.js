let salary= +prompt("Moi ban nhập vào tiền lương")

if(salary<5 ){
    document.write("Luong cua ban là  ",salary);
    document.write("So tien thue cua ban =0");
    
}else if(salary<10){
   let tax =salary*0.1;
   let result=salary-tax
     document.write("So tien nhan lai sau thue la",result ,"tr");

} else {
    document.write("leu leu")
}