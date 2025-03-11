function isStrongPassword(password) {



    for (let i = 0; i < password.length; i++) {
        if (password.length > 8 &&i==/[a-z]/&& i==/[A-Z]/ && i==/[0-9]/ && i==/[^a-zA-Z0-9]/ ) {
            return true;
       
    }
    return false;
}
}
let n=prompt("Nhập mật khẩu: ");
console.log(isStrongPassword(n));


