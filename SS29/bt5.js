let users = [];
let choice;
while (choice !== 3) {
  console.log("1. Đăng ký người dùng mới");
  console.log("2. Đăng nhập người dùng");
  console.log("3. Thoát");

  choice = +prompt("Nhập lựa chọn của bạn: ");

  switch (choice) {
    case 1:
      let name = prompt("Nhập tên của bạn: ");
      let email = prompt("Nhập email của bạn: ");
      let password = prompt("Nhập mật khẩu của bạn: ");

      let emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
      let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

      if (!emailRegex.test(email)) {
        console.log("Email không hợp lệ. Vui lòng nhập lại!");
        break;
      }
      if (!passwordRegex.test(password)) {
        console.log(
          "Mật khẩu phải có ít nhất 6 ký tự, chứa ký tự đặc biệt và chữ hoa!"
        );
        break;
      }
      if (users.some((user) => user.email === email)) {
        console.log("Email đã tồn tại. Vui lòng sử dụng email khác!");
        break;
      }

      users.push({ name, email, password });
      console.log("Đăng ký thành công!");
      break;

    case 2:
      let loginEmail = prompt("Nhập email: ");
      let loginPassword = prompt("Nhập mật khẩu: ");

      let user = users.find(
        (user) => user.email === loginEmail && user.password === loginPassword
      );

      if (user) {
        console.log("Đăng nhập thành công!");
        console.log("Thông tin người dùng:", user);
      } else {
        console.log("Đăng nhập thất bại! Email hoặc mật khẩu không đúng.");
      }
      break;

    case 3:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
}