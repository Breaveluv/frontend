let employees = [];
let choice;

function addEmployees(employees) {
    const nameOfEmployessInput = prompt('Nhập tên nhân viên: ');
    const positionOfEmployeesInput = prompt('Nhập vị trí của nhân viên: ');
    const salaryOfEmployeesInput = prompt('Nhập mức lương của nhân viên: ');
    const newEmployees = {
        id: Math.ceil(Math.random() * 1000000),
        name: nameOfEmployessInput,
        position: positionOfEmployeesInput,
        salary: salaryOfEmployeesInput,
    };
    employees.push(newEmployees);
    alert('Thêm nhân viên hoàn tất');
}

function deleteEmployees(employees){
    const idDeleteEmployees = +prompt('Nhập ID nhân viên muốn xóa: ');
    const indexDeleteEmployees = employees.findIndex((employees) => employees.id === idDeleteEmployees);
    let confirmDelete = false;

    if(indexDeleteEmployees !== -1){
        confirmDelete = confirm('Bạn có xác nhận xóa nhân viên này không');
    }
    else{
        alert('ID nhân viên không tồn tại');
        return employees;
    }

    if(confirmDelete){
        employees = employees.splice(indexDeleteEmployees,1);
        alert('Xóa nhân viên hoàn tất');
        return employees;
    }
}

function updateSalary(employees){
    const idUpdateSalary = +prompt('Nhập ID nhân viên muốn cập nhật lương: ');
    const indexUpdateSalary = employees.findIndex((employees) => employees.id === idUpdateSalary);

    if(indexUpdateSalary !== -1){
        const salaryUpdate = +prompt('Nhập mức lương mới');
        employees[indexUpdateSalary].salary = salaryUpdate;
        return employees;
    }
    else{
        alert('ID nhân viên không tồn tại');
    }
}

function findEmployees(employees){
    const nameEmployeeSearchInput = prompt('Nhập tên nhân viên muốn tìm kiếm: ');
    const searchByName = employees.find((employees) => employees.name.toLowerCase() === nameEmployeeSearchInput.toLowerCase());

    if(searchByName){
        alert('Đã tìm thấy nhân viên: ' + nameEmployeeSearchInput);
    }
    else{
        alert('Không tìm thấy nhân viên: ' + nameEmployeeSearchInput);
    }

}

do{
    choice = +prompt(`1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên
5. In danh sách nhân viên
6. Thoát`);

    if(choice === 1){
        addEmployees(employees);
    }
    else if(employees.length === 0 && !isNaN(choice) && choice !== 6){
        alert('Chưa thêm nhân viên');
    }
    else{
        switch (choice) {
            case 2:
                deleteEmployees(employees);
                break;
            case 3:
                updateSalary(employees);
                break;
            case 4:
                findEmployees(employees);
                break;
            case 5:
                console.table(employees);
                break;
            default:
                break;
        }
    }
}
while(choice != 6);