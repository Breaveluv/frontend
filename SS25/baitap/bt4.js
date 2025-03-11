function findSonguyento(a){
    if(a%1==0 && a>1){
        for(let i=2;i<a;i++){
            if(a%i==0){
                return false;
            }
        }
        return true;
}
}
console.log(findSonguyento(4));