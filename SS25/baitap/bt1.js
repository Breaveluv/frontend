function findMin(arr){
if(Array.isArray(arr)==false){
    console.log(`Du lieu khong hop le`);
    return;
        }
    }
    if(arr.length==0){
        console.log(`Mang rong`);
        return;
    }
    let minElement=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<minElement){
        minElement=arr[i];

        }
        return minElement;
    }
    console.log(min);
findMin([1,2,3,4,5]);
findMin([]);
findMin("abc");
