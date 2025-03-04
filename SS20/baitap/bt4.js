let flag = 0;
let stA=prompt("Moi ban nhap chuoi");
let stb=prompt("Moi ban nhap tu muon tim");
for(let i=0;i<stA.length;i++){
    if(stA[i] == stb){
        
        flag=1;
        break;
    }
}
flag==1? console.log("ton tai") : console.log("khong ton tai");
 