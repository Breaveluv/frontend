let text =prompt("hãy nhập chuỗi");
let m=0;
for(let i =0;i<text.length;i++){
    if(text[i]== " "){
        m++;
    }
}
if( m > 0){
    document.write("có dấu cách");

}else{
    document.write("không có dấu cách");x
}