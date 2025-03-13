
let students=[];
function addStudent(){
    let n=prompt("Nhập số lượng sinh viên");
    for(let i=0;i<n;i++){
        let name=prompt("Nhập tên sinh viên");
        students.push(name);
        console.log(name);
        return students;
    }
}
function showStudent(){
    for(let i=0;i<students.length;i++){
        console.log(students[i]);
    }
}
function findStudent(){
    let name=prompt("Nhập tên sinh viên cần tìm");
    let check=false;
    for(let i=0;i<students.length;i++){
        if(name==students[i]){
            console.log(students[i]);
            check=true;
            break;
        }
    }
    if(check==false){
        console.log("Sinh viên không có trong danh sách");
        
    }
}
function deleteStudent(){
    let name=prompt("Nhập tên sinh viên cần xóa");
    for(let i=0;i<students.length;i++){
        if(name==students[i]){
            students.splice(i,1);
            break;
        }
    }
}
console.log(`1.Nhập danh sách sinh viên\n2.In danh sách   \n3.Tìm tên sinh viên\n4.Xóa tên sinh viên\n5.Thoát`);
let choice=prompt("Chọn chức năng");
switch(choice){
    case "1":
      addStudent();

        break;
    case "2":
       showStudent();
        break;
    case "3":
        findStudent();
        break;
    case "4":
       deleteStudent();
        break;
    case "5":
        break;
    default:
        console.log("Nhập sai");
        break;
}

   