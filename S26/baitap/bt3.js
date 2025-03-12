/*Cho danh sách email, viết hàm lọc ra các email hợp lệ (có chứa ký tự "@" và không có khoảng trắng) */

let use = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];

function email(user) {
  let validEmail = user.filter((email) => email.includes("@") && email.includes(".com")&&!email.includes(" "));
  console.log(validEmail);
}
email(use);