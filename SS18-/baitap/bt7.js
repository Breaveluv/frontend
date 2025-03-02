let NumA=+prompt("Moi ban nhap so A");
let NumB=+prompt("Moi ban nhap so B");
let operation=prompt("Moi ban nhap vao phep tinh");
switch(operation){
    case "+":
        let result=(NumA+NumB)
        document.write(`a+b =${result}`);
        break;
     case "-":
        let result1=(NumA-NumB)
        document.write(`a - b =${result1}`);
        break;
    case "*":
        let result2=(NumA*NumB)
        document.write(`a*b =${result2}`);
        break;
    case "/":
        let result3=(NumA/NumB)
        document.write(`a/b =${result3}`);
        break;    
    default:
        document.write("Phép tính không hợp l")
}
