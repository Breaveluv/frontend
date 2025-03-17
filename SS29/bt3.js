let menu = {}; // Object chứa danh mục và món ăn

function addDish() {
    const category = prompt("Nhập tên danh mục:");
    const name = prompt("Nhập tên món ăn:");
    const price = parseFloat(prompt("Nhập giá món ăn:"));
    const description = prompt("Nhập mô tả món ăn:");

    if (!menu[category]) {
        menu[category] = [];
    }

    menu[category].push({
        name: name,
        price: price,
        description: description
    });

    console.log(`Đã thêm món ăn "${name}" vào danh mục "${category}".`);
}

function removeDish() {
    const category = prompt("Nhập tên danh mục:");
    const name = prompt("Nhập tên món ăn cần xóa:");

    if (menu[category]) {
        const index = menu[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log(`Đã xóa món ăn "${name}" khỏi danh mục "${category}".`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Không tìm thấy danh mục "${category}".`);
    }
}

function updateDish() {
    const category = prompt("Nhập tên danh mục:");
    const name = prompt("Nhập tên món ăn cần cập nhật:");

    if (menu[category]) {
        const dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:");
            dish.price = parseFloat(prompt("Nhập giá mới:"));
            dish.description = prompt("Nhập mô tả mới:");
            console.log(`Đã cập nhật thông tin món ăn "${name}".`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Không tìm thấy danh mục "${category}".`);
    }
}

function displayMenu() {
    for (const category in menu) {
        console.log(`\n--- ${category} ---`);
        menu[category].forEach(dish => {
            console.log(`- ${dish.name}: ${dish.price} VND - ${dish.description}`);
        });
    }
}

function searchDish() {
    const name = prompt("Nhập tên món ăn cần tìm:");
    let found = false;

    for (const category in menu) {
        menu[category].forEach(dish => {
            if (dish.name === name) {
                console.log(`Tìm thấy món ăn "${name}" trong danh mục "${category}":`);
                console.log(`- Giá: ${dish.price} VND`);
                console.log(`- Mô tả: ${dish.description}`);
                found = true;
            }
        });
    }

    if (!found) {
        console.log(`Không tìm thấy món ăn "${name}" trong menu.`);
    }
}

function displayMenuOptions() {
    console.log("\n--- Hệ thống quản lý menu nhà hàng ---");
    console.log("1. Thêm món ăn vào danh mục");
    console.log("2. Xóa món ăn khỏi danh mục");
    console.log("3. Cập nhật thông tin món ăn");
    console.log("4. Hiển thị toàn bộ menu");
    console.log("5. Tìm kiếm món ăn theo tên");
    console.log("6. Thoát");
}

let choice;
do {
    displayMenuOptions();
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            removeDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDish();
            break;
        case 6:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
} while (choice !== 6);