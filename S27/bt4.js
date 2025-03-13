
console.log(`1.Nhập danh sách số nguyên\n2.Tính trung bình các số\n3.Tìm số chẵn lớn nhất\n4.Tìm số lẻ nhỏ nhất\n5.Thoát`);
let choice=prompt("Chọn chức năng");
let n=[];
function checkNumber(n){
    if(isNaN(n)){
        return false;
    }
    return true;
}
function nhapSoNguyen(){
    let m=prompt("Nhập số lượng số nguyên");
    for(let i=0;i<m;i++){
        let a=prompt("Nhập số nguyên");
        n.push(a);
    }
    return n;
}
function tinhTrungBinh(){
    let total=0;
    for(let i=0;i<n.length;i++){
        total+=parseInt(n[i]);
    }
    return total/n.length;
}
function timSoChanLonNhat(){
    let max=0;
    for(let i=0;i<n.length;i++){
        if(n[i]%2==0){
            if(n[i]>max){
                max=n[i];
            }
        }
    }
    return max;
}
function timSoLeNhoNhat(){
    let min=100000000;
    for(let i=0;i<n.length;i++){
        if(n[i]%2!=0){
            if(n[i]<min){
                min=n[i];
            }
        }
    }
    return min;
}
switch(choice){
    case "1":
        nhapSoNguyen();
        break;
    case "2":
        tinhTrungBinh();
        console.log(tinhTrungBinh());
        break;
    case "3":
        timSoChanLonNhat();
        console.log(timSoChanLonNhat());
        break;
    case "4":
        timSoLeNhoNhat();
        console.log(timSoLeNhoNhat());
        break;
    case "5":
        break;
    default:
        console.log("Nhập sai");
        break;
}