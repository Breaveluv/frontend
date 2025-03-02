let hour=+prompt("Moi ban nhap so gio (0-23)");
let mutie=+prompt("Moi ban nhap so phut(0-59)");
let second=+prompt("Moi ban nhap so giây(0-59)");
if(hour<0 || hour>23|| mutie<0||mutie>59||second<0||second>59){
    alert("Nhap sai thoi gian r")
}else{
    let real =hour%12;

   if( hour<=12){
    alert(`${real} ${mutie} ${second} AM`)
}else(
    alert(`${real} ${mutie} ${second} M`)

)
}