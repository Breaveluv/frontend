function kiemTradoiXung(str) {
    let strReverse = str.split('').reverse().join('');
    if (str === strReverse) {
        
        console.log("đây là chuỗi đối xứng");
    }else{
        console.log("đây không phải chuỗi đối xứng");
        
}
    

}
console.log(kiemTradoiXung("abba"));
console.log(kiemTradoiXung("abc"));