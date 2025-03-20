// DOM (Document Object Model)
// 1. Truy van cac thẻ HTML thông qua js (5 cách)
// Truy van thông qua Id => chính xác thẻ được gọi (Recommend)
// let divContainer = document.getElementById("container");
// console.log("Lấy thông qua id=>", divContainer);
// Truy van thông qua class
// => HTML Collection(kiểu dữ liệu dạng mảng nhưng không phải là mảng)
// let pBox = document.getElementsByClassName("box");
// console.log("Lấy thông qua class=>", pBox);
// // Truy vấn thông qua tagName
// let pElement = document.getElementsByTagName("p");
// console.log("Lấy thông qua tagName=>", pElement);
// // Truy vấn thông querySelector (.với class và # với id)
// // Nếu như có class trùng nhau thì nó sẽ lấy thằng đầu tiên
// let pBox3 = document.querySelector(".box");
// console.log("Lấy thông qua querySelector=>", pBox3);
// // Truy vấn thông querySelectorAll=> lấy tất cả các thẻ có chung class
// let pBox1 = document.querySelectorAll(".box");
// console.log("Lấy thông qua querySelectorAll=>", pBox1);

// Lấy nội dung bên trong thẻ (innerHTML, innerText, textContent)
// let result = divContainer.innerHTML;
// let result1 = divContainer.innerText;
// let result2 = divContainer.textContent;
// console.log("innerHTML=>", result); // recommend
// console.log("innerText=>", result1);
// console.log("textContent=>", result2);

//setAttribute, getAttribute (set thuộc tính và lấy thuộc tính)
// let aLink = document.getElementById("link");
// // setAttribute("name", value)
// aLink.setAttribute("href", "https://www.facebook.com/bach.nguyen.695102/");
// // console.log("sau khi thêm attribute", aLink);
// // aLink.setAttribute("style", "color:black");
// // getAttribute("name")
// console.log(aLink.getAttribute("href"));

// parentElement và children
// console.log("parentElement", divContainer.parentElement.parentElement);
// console.log("children",divContainer.children[3].children[0]);

// createElement và appendChild (Ứng dụng todoList)
// createElement (tạo thẻ HTML mới)
// let h2 = document.createElement("h2");
// // console.log(h2.innerText);
// h2.innerText = `Minh đẹp zai`;
// // appendChild (thêm thẻ mới vào  DOM tree)
// divContainer.appendChild(h2);

// Sự kiện
// let btnPlus = document.getElementById("plus");
// let btnMinus = document.getElementById("minus");
// let content = document.getElementById("content");
// console.log(content.innerText);

// // onclick
// btnPlus.onclick = () => {
//   content.innerText++;
// };
// // addEventListener
// btnMinus.addEventListener("click", ()=>{
//     if(content.innerText>0){
//         content.innerText--;
//     }
// })

// Lấy thông tin form
// let form = document.getElementById("myForm");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // Ngắn không reload trang
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let gender = document.querySelector('input[name="gender"]:checked');
//   gender = gender ? gender.value : "Chưa xác định";
//   //   console.log(name, email, gender);
//   let result = document.getElementById("result");
//   result.innerHTML = `<strong> Thông tin khách hàng</strong>
//       <p>Họ và tên:${name}</p>
//       <p>Email:${email}</p>
//       <p>Giới tính:${gender}</p>`;
// });