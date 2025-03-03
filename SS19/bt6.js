let numA=+prompt("Hãy nhập số A")
let numB=+prompt("Hãy nhập số B")
let numC=+prompt("Hãy nhập số C")
let delta= numB^2-4*numA*numC
if(delta<0){
    document.write(`Phương trình vô nghiệm`);
}else if(delta===0){
    let x3=-numB/2*numA
    document.write(`Phương trình có 2 nghiệm kép là: x1=x2=${x3} `)
}else{
    let x1=(-numB+Math.sqrt(delta))/2*numA
    let x2=(numB+Math.sqrt(delta))/2*numA
    document.write(`Phương trình có 2 ngiệm phân biệt là x1=${x1} và x2=${x2} `)
}