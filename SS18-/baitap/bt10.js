
let number = prompt("Nhap so bat ki : ");
let num = parseInt(number);
let num1 = Math.floor(num / 100);
let num2 = Math.floor((num % 100) / 10);
let num3 = num % 10;
let numStr = "";
switch (num1) {
    case 1:
        numStr += "Mot tram ";
        break;
    case 2:
        numStr += "Hai tram ";
        break;
    case 3:
        numStr += "Ba tram ";
        break;
    case 4:
        numStr += "Bon tram ";
        break;
    case 5:
        numStr += "Nam tram ";
        break;
    case 6:
        numStr += "Sau tram ";
        break;
    case 7:
        numStr += "Bay tram ";
        break;
    case 8:
        numStr += "Tam tram ";
        break;
    case 9:
        numStr += "Chin tram ";
        break;
}
switch (num2) {
    case 1:
        numStr += "muoi ";
        break;
    case 2:
        numStr += "hai muoi ";
        break;
    case 3:
        numStr += "ba muoi ";
        break;
    case 4:
        numStr += "bon muoi ";
        break;
    case 5:
        numStr += "nam muoi ";
        break;
    case 6:
        numStr += "sau muoi ";
        break;
    case 7:
        numStr += "bay muoi ";
        break;
    case 8:
        numStr += "tam muoi ";
        break;
    case 9:
        numStr += "chin muoi ";
        break;
}
switch (num3) {
    case 1:
        numStr += "mot";
        break;
    case 2:
        numStr += "hai";
        break;
    case 3:
        numStr += "ba";
        break;
    case 4:
        numStr += "bon";
        break;
    case 5:
        numStr += "nam";
        break;
    case 6:
        numStr += "sau";
        break;
    case 7:
        numStr += "bay";
        break;
    case 8:
        numStr += "tam";
        break;
    case 9:
        numStr += "chin";
        break;
}
document.write(numStr);