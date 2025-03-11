function findchan(arr){
   for(let i=0;i<arr.length;i++){
       if(arr[i]%2==0){
           console.log(arr[i]);
       
       }else if(Array.isArray(arr)==false){
        console.log("Không phải số");
   }else{
           console.log("Không có số chẵn");
}
}
}
console.log(findchan([1,2,3,4,5]));
console.log(findchan([1,3,5]));
console.log(findchan(hi));