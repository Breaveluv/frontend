function sum(a,b){
        
        if(Number.isInteger(a) && Number.isInteger(b)){
            return a+b;
        }else if(Number.isNaN(a) && Number.isNaN(b)){
          console.log("Không phải số");
          return 1;

}
}
console.log(sum(1,2));
console.log(sum("a",2));
console.log(sum(1.3,3));






