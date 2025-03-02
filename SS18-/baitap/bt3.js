let uSer = prompt("nhap ten nguoi dung : ");
let pass = prompt("nhap mat khau : ");
if (user = "ADMIN") {
    if (pass = "TheMaster") {
        document.write("Welcome");
    }
    else if (pass = "") {
        document.write("Canceled");
    }
    else {
        document.write("Wrong password");
    }
}
else if (user = "") {
    document.write("Canceled");
}
else {
    document.write("I don't know you    ");
}