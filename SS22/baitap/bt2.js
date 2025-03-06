let number=[2,3,4,5,6,7];
let checknumber=+prompt('Nhập số muốn tìm');
for(let i=0;i<=number.length;i++){
        if(checknumber==number[i]){
            document.write('Binggo');

        }else {
            document.write('hnam nguu')
        }
}