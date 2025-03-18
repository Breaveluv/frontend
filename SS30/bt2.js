let books = [
    { id: 1, name: "Harry Potter", category: "Fantasy", price: 100000, quantity: 10 },
    { id: 2, name: "To Kill a Mockingbird", category: "Classic", price: 120000, quantity: 5 },
    { id: 3, name: "The Lord of the Rings", category: "Fantasy", price: 150000, quantity: 8 },
    { id: 4, name: "Pride and Prejudice", category: "Classic", price: 90000, quantity: 12 }
];

let cart = []; // Giỏ hàng
let choice;

do {
    console.log(`
        1. Hiển thị danh sách sách theo thể loại.
        2. Thêm sách mới vào kho.
        3. Tìm kiếm sách theo tên hoặc ID.
        4. Mua sách.
        5. Sắp xếp sách theo giá.
        6. Tính tổng số lượng và tiền trong giỏ hàng.
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát.`);

    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            showBooksByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            calculateCartTotal();
            break;
        case 7:
            displayTotalBooks();
            break;
        case 8:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 8);

function showBooksByCategory() {
    const category = prompt("Nhập thể loại sách (Fantasy, Classic):");
    const filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    if (filteredBooks.length > 0) {
        console.log(filteredBooks);
    } else {
        console.log("Không tìm thấy sách thuộc thể loại này.");
    }
}

function addBook() {
    const id = parseInt(prompt("Nhập ID sách:"));
    const name = prompt("Nhập tên sách:");
    const category = prompt("Nhập thể loại sách:");
    const price = parseInt(prompt("Nhập giá sách:"));
    const quantity = parseInt(prompt("Nhập số lượng sách:"));

    books.push({ id, name, category, price, quantity });
    console.log("Đã thêm sách thành công.");
}

function searchBook() {
    const searchTerm = prompt("Nhập tên hoặc ID sách:");
    const foundBook = books.find(book => book.name.toLowerCase() === searchTerm.toLowerCase() || book.id === parseInt(searchTerm));
    if (foundBook) {
        console.log(foundBook);
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    const id = parseInt(prompt("Nhập ID sách cần mua:"));
    const quantity = parseInt(prompt("Nhập số lượng sách cần mua:"));
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1 && books[bookIndex].quantity >= quantity) {
        books[bookIndex].quantity -= quantity;
        cart.push({ ...books[bookIndex], quantity });
        console.log("Đã thêm sách vào giỏ hàng.");
    } else {
        console.log("Không đủ sách trong kho hoặc không tìm thấy sách.");
    }
}

function sortBooksByPrice() {
    const sortType = prompt("Chọn kiểu sắp xếp (asc/desc):");
    if (sortType.toLowerCase() === "asc") {
        books.sort((a, b) => a.price - b.price);
    } else if (sortType.toLowerCase() === "desc") {
        books.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
    console.log("Đã sắp xếp sách.");
}

function calculateCartTotal() {
    const totalQuantity = cart.reduce((sum, book) => sum + book.quantity, 0);
    const totalPrice = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
    console.log(`Tổng số lượng sách: ${totalQuantity}, Tổng tiền: ${totalPrice} VND`);
}

function displayTotalBooks() {
    const totalBooks = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalBooks}`);
}