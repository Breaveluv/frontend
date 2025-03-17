let contactList = [];
let choice;

function addContact() {
    const name = prompt('Nhập tên người dùng: ');
    const email = prompt('Nhập email: ');
    const phone = prompt('Nhập số điện thoại: ');
    const newContact = {
        id: Math.ceil(Math.random() * 1000000),
        name: name,
        email: email,
        phone: phone,
    };
    contactList.push(newContact);
    alert('Thêm liên hệ hoàn tất');
}

function showContacts() {
    if (contactList.length === 0) {
        alert('Danh bạ trống');
    } else {
        console.log("Danh bạ:");
        contactList.forEach(contact => {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }
}

function updateContact() {
    const idUpdate = +prompt('Nhập ID liên hệ muốn cập nhật: ');
    const indexUpdate = contactList.findIndex(contact => contact.id === idUpdate);

    if (indexUpdate !== -1) {
        contactList[indexUpdate].name = prompt('Nhập tên mới: ', contactList[indexUpdate].name);
        contactList[indexUpdate].email = prompt('Nhập email mới: ', contactList[indexUpdate].email);
        contactList[indexUpdate].phone = prompt('Nhập số điện thoại mới: ', contactList[indexUpdate].phone);
        alert('Cập nhật liên hệ hoàn tất');
    } else {
        alert('ID liên hệ không tồn tại');
    }
}

function findContact() {
    const phoneSearch = prompt('Nhập số điện thoại liên hệ muốn tìm kiếm: ');
    const contact = contactList.find(contact => contact.phone === phoneSearch);

    if (contact) {
        alert(`Đã tìm thấy: \nID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
    } else {
        alert('Không tìm thấy liên hệ với số điện thoại này.');
    }
}

function deleteContact() {
    const idDelete = +prompt('Nhập ID liên hệ muốn xóa: ');
    const indexDelete = contactList.findIndex(contact => contact.id === idDelete);

    if (indexDelete !== -1) {
        const confirmDelete = confirm('Bạn có chắc chắn muốn xóa liên hệ này không?');
        if (confirmDelete) {
            contactList.splice(indexDelete, 1);
            alert('Xóa liên hệ hoàn tất');
        }
    } else {
        alert('ID liên hệ không tồn tại');
    }
}

do {
    choice = +prompt(`
1. Thêm liên hệ mới
2. Hiển thị danh bạ
3. Cập nhật thông tin liên hệ
4. Tìm kiếm liên hệ theo số điện thoại
5. Xóa một liên hệ theo ID
6. Thoát
Nhập lựa chọn của bạn: `);

    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            showContacts();
            break;
        case 3:
            updateContact();
            break;
        case 4:
            findContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            alert('Hẹn gặp lại!');
            break;
        default:
           
    }
} while (choice !== 6);







