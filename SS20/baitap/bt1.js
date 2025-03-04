let numB=+prompt("Hãy nhập 1 số bất kì");
let result = 0;
if(numB>0 ){
    for(let i =1; i<=numB;i++  ){
                result+=i;    
      
        
                
      }
      document.write(`Tổng từ 1 đến ${numB} là `,result);
} else{
    document.write("Không hợp lệ")
}
