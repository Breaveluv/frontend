let n=[1,2, 3, 4, 5, 6, 7, 8, 9, 10];
let chan=n.filter(Element=>Element%2==0);
console.log(chan);
let le=n.filter(Element=>Element%2!=0);
console.log(le);
let toltalEven=0;
let totalOdd=0;
for(let i=0;i<chan.length;i++){
   toltalEven+=chan[i];
}
console.log(toltalEven);
for(let i=0;i<le.length;i++){
    totalOdd+=le[i];
}
console.log(totalOdd);