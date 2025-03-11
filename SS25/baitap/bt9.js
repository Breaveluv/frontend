function email(user) {
    Email = prompt("nhập email: ");
    if (
      (Email.includes(".com") && Email.includes("@")) ||
      (Email.includes(".vn") && Email.includes("@"))
    ) {
      let count = 0;
      for (let i = 0; i < user.length; i++) {
        if (Email == user[i]) {
          console.log("trung");
          count = -1;
        }
      }
      if (count == 0) {
        user[user.length] = Email;
      }

      console.log(user);
    }
}
let user = ["huy@gmail.com", "hehe@gmail.com"];
email(user);

