/*Tạo một hệ thống quản lý sản phẩm với các chức năng CRUD.Mỗi sản phẩm có các thuộc tính:

id: Định danh duy nhất.
name: Tên sản phẩm.
price: Giá sản phẩm.
category: Danh mục sản phẩm.
quantity: Số lượng sản phẩm trong kho.
 

Các chức năng:

Thêm sản phẩm vào danh sách sản phẩm.
Hiển thị tất cả sản phẩm.
Hiển thị chi tiết sản phẩm theo id.
Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
Xóa sản phẩm theo id.
Lọc sản phẩm theo khoảng giá.
Thoát.  */
let products = [];

function addProduct(id, name, price, category, quantity) {
    const name = prompt('Nhập tên người dùng: ');
    const price = +prompt('Nhập giá tiền: ');
    const phone = prompt('Nhập số điện thoại: ');
    const quantity=+prompt(`Nhập số lượngn`);
    const category=prompt('Nhập danh mục sản phẩm ');
    const newProducts = {
        id: Math.ceil(Math.random() * 1000000),
        name: name,
        price: price,
        phone: phone,
        quantity:quantity,
        category:category,
    };
    products.push(newProducts);
    alert('Thêm thành công');
}
   


function displayAllProducts() {
    if(products.length===0){
        console.log(`Danh sách trống`)
    }else{
        console.log(products);
    }
}

function displayProductById() {
    const idSearch = prompt('Nhập id tìm kiếm: ');
    const product1 = products.find(contact => contact.phone === idSearch);
    if (product1) {
        alert(`Đã tìm thấy: \nID: ${products.id}, Name: ${products.name}, Email: ${products.price}, Phone: ${products.phone},Quantity${products.quantity}, category${products.category}`);
    } else {
        alert('Không tìm thấy id này.');
    }
   
}

function updateProduct(  ) {
    const idUpdate = +prompt('Nhập ID liên hệ muốn cập nhật: ');
    const indexUpdate = contactList.findIndex(contact => contact.id === idUpdate);

    if (indexUpdate !== -1) {
       products[indexUpdate].name = prompt('Nhập tên mới: ', contactList[indexUpdate].name);
        products[indexUpdate].price = prompt('Nhập email mới: ', contactList[indexUpdate].price);
        products[indexUpdate].phone = prompt('Nhập số điện thoại mới: ', contactList[indexUpdate].phone);
        products[indexUpdate].category = prompt('Nhập số điện thoại mới: ', contactList[indexUpdate].category);
        productst[indexUpdate].quantity = prompt('Nhập số điện thoại mới: ', contactList[indexUpdate].quantity);
        alert('Cập nhật liên hệ hoàn tất');
    } else {
        alert('ID liên hệ không tồn tại');
    }
}

function deleteProduct() {
    const idDelete = +prompt('Nhập ID liên hệ muốn xóa: ');
    const indexDelete = products.findIndex(products => products.id === idDelete);

    if (indexDelete !== -1) {
        const confirmDelete = confirm('Bạn có chắc chắn muốn xóa liên hệ này không?');
        if (confirmDelete) {
            products.splice(indexDelete, 1);
            alert('Xóa liên hệ hoàn tất');
        }
    } else {
        alert('ID liên hệ không tồn tại');
    }
}

function filterProductsByPriceRange() {
    const minPrice =+prompt(`Nhap gia tien it nhat`);
    const maxPrice=+prompt(`Nhap gia tien cao nhat`);
    const searchPrice=products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.log(searchPrice);
}
do {
    choice = +prompt(`
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm
5.Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7.Thoát
Nhập lựa chọn của bạn: `);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayAllProducts();
            break;
        case 3:
            displayProductById();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            filterProductsByPriceRange();
            break;
        case 7:
            break;
        default:
           
    }
} while (choice !== 7);
