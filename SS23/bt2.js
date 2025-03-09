let n=[1,2,3,4,5,6];
let max=n[0];
let index;
for(let i=0;i<n.length;i++){
    if(n[i]>max){
          max=n[i];
         index=i;
    }
}
console.log(max);
console.log(`Vi tri cua so lon nhat`,index);