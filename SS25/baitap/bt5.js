function demSonguyenDuong(n){
    let count = 0;
    for(let i=0;i<n.length;i++){
        if(n[i]>0){
            count++;
        }
    }
    if(count==0){
        return "Không có số nguyên dương";
    }
    return count;
}
console.log(demSonguyenDuong([1,-2,3,-44,5]));