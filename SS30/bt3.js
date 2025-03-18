let phones = [
  { id: 1, name: "iPhone 13", price: 25000000, quantity: 10, company: "Apple" },
  { id: 2, name: "Galaxy S22", price: 22000000, quantity: 5, company: "Samsung" },
  { id: 3, name: "Pixel 6", price: 20000000, quantity: 8, company: "Google" },
  { id: 4, name: "Xiaomi 12", price: 18000000, quantity: 12, company: "Xiaomi" }
];
let cart = [];

let choice;
do {
  console.log(`
      1: Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
      2: Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
      3: Tìm kiếm điện thoại theo tên hoặc id
      4: Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
      5: Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
      6: Sắp xếp điện thoại theo giá:
          a. Tăng dần
          b. Giảm dần
      7: Hiển thị tổng số tiền của các điện thoại trong kho
      8: Hiển thị tổng số lượng điện thoại theo từng hãng (VD: samsung - 5, iphone - 3,...)
      9: Thoát chương trình`);
  choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
  switch (choice) {
      case 1:
          showPhone();
          break;
      case 2:
          addPhone();
          break;
      case 3:
          searchPhone();
          break;
      case 4:
          buyPhone();
          break;
      case 5:
          checkout();
          break;
      case 6:
          sortPhones();
          break;
      case 7:
          displayTotalInventoryPrice();
          break;
      case 8:
          displayQuantityByCompany();
          break;
      case 9:
          console.log("Chương trình kết thúc.");
          break;
      default:
          console.log("Lựa chọn không hợp lệ.");
  }
} while (choice !== 9);

function showPhone() {
  let company = prompt("Mời bạn nhập tên hãng điện thoại:");
  let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
  if (filteredPhones.length > 0) {
      console.log(filteredPhones);
  } else {
      console.log("Không tìm thấy điện thoại thuộc hãng này.");
  }
}

function addPhone() {
  const id = parseInt(prompt("Nhập ID điện thoại:"));
  const name = prompt("Nhập tên điện thoại:");
  const price = parseInt(prompt("Nhập giá tiền:"));
  const quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
  const company = prompt("Nhập tên hãng:");
  phones.push({ id, name, price, quantity, company });
  console.log("Đã thêm điện thoại thành công.");
}

function searchPhone() {
  const searchTerm = prompt("Nhập tên hoặc ID điện thoại:");
  const foundPhone = phones.find(phone => phone.name.toLowerCase() === searchTerm.toLowerCase() || phone.id === parseInt(searchTerm));
  if (foundPhone) {
      console.log(foundPhone);
  } else {
      console.log("Không tìm thấy điện thoại.");
  }
}

function buyPhone() {
  const id = parseInt(prompt("Nhập ID điện thoại cần mua:"));
  const quantity = parseInt(prompt("Nhập số lượng điện thoại cần mua:"));
  const phoneIndex = phones.findIndex(phone => phone.id === id);

  if (phoneIndex !== -1 && phones[phoneIndex].quantity >= quantity) {
      phones[phoneIndex].quantity -= quantity;
      cart.push({ ...phones[phoneIndex], quantity });
      console.log("Đã thêm điện thoại vào giỏ hàng.");
  } else {
      console.log("Không đủ điện thoại trong kho hoặc không tìm thấy điện thoại.");
  }
}

function checkout() {
  if (cart.length > 0) {
      console.log("Thanh toán thành công!");
      cart = [];
  } else {
      console.log("Giỏ hàng trống.");
  }
}

function sortPhones() {
  const sortType = prompt("Chọn kiểu sắp xếp (a. Tăng dần, b. Giảm dần):");
  if (sortType.toLowerCase() === "a") {
      phones.sort((a, b) => a.price - b.price);
  } else if (sortType.toLowerCase() === "b") {
      phones.sort((a, b) => b.price - a.price);
  } else {
      console.log("Lựa chọn không hợp lệ.");
  }
  console.log("Đã sắp xếp điện thoại.");
}

function displayTotalInventoryPrice() {
  const totalPrice = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
  console.log(`Tổng số tiền điện thoại trong kho: ${totalPrice} VND`);
}

function displayQuantityByCompany() {
  const companyQuantities = {};
  phones.forEach(phone => {
      if (companyQuantities[phone.company]) {
          companyQuantities[phone.company] += phone.quantity;
      } else {
          companyQuantities[phone.company] = phone.quantity;
      }
  });
  for (const company in companyQuantities) {
      console.log(`${company} - ${companyQuantities[company]}`);
  }
}