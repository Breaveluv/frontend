let arr=[6,7,8,9];

let org_str = arr.toString();
let reverse_str = '';

for (let i= org_str.length -1; i >= 0; i--){
  reverse_str += org_str[i];
}

console.log(reverse_str);
