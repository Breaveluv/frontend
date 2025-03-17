let tasks = []; // Mảng chứa các công việc

function addTask() {
    const id = parseInt(prompt("Nhập ID công việc:"));
    const name = prompt("Nhập tên công việc:");
    const description = prompt("Nhập mô tả công việc:");
    const startTime = prompt("Nhập thời gian bắt đầu:");
    const status = "Chưa hoàn thành";

    tasks.push({
        id: id,
        name: name,
        description: description,
        startTime: startTime,
        status: status
    });

    console.log(`Đã thêm công việc "${name}".`);
}

function displayTasks() {
    console.log("\n--- Danh sách công việc ---");
    tasks.forEach(task => {
        console.log(`- ID: ${task.id}`);
        console.log(`  Tên: ${task.name}`);
        console.log(`  Mô tả: ${task.description}`);
        console.log(`  Thời gian bắt đầu: ${task.startTime}`);
        console.log(`  Trạng thái: ${task.status}`);
    });
}

function updateTaskStatus() {
    const id = parseInt(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.status = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành):");
        console.log(`Đã cập nhật trạng thái công việc "${task.name}".`);
    } else {
        console.log(`Không tìm thấy công việc với ID ${id}.`);
    }
}

function filterTasksByStatus() {
    const status = prompt("Nhập trạng thái cần lọc (Hoàn thành/Chưa hoàn thành):");
    const filteredTasks = tasks.filter(task => task.status === status);

    if (filteredTasks.length > 0) {
        console.log(`\n--- Danh sách công việc trạng thái "${status}" ---`);
        filteredTasks.forEach(task => {
            console.log(`- ID: ${task.id}`);
            console.log(`  Tên: ${task.name}`);
            console.log(`  Mô tả: ${task.description}`);
            console.log(`  Thời gian bắt đầu: ${task.startTime}`);
        });
    } else {
        console.log(`Không có công việc nào có trạng thái "${status}".`);
    }
}

function sortTasksByStatus() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Đã sắp xếp công việc theo trạng thái.");
}

function displayMenu() {
    console.log("\n--- Quản lý danh sách công việc ---");
    console.log("1. Thêm công việc mới");
    console.log("2. Hiển thị tất cả các công việc");
    console.log("3. Cập nhật trạng thái công việc");
    console.log("4. Lọc công việc theo trạng thái");
    console.log("5. Sắp xếp công việc theo trạng thái");
    console.log("6. Thoát");
}

let choice;
do {
    displayMenu();
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            displayTasks();
            break;
        case 3:
            updateTaskStatus();
            break;
        case 4:
            filterTasksByStatus();
            break;
        case 5:
            sortTasksByStatus();
            break;
        case 6:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
} while (choice !== 6);