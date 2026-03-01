      
let students = [
  { id: 1, name: "Do Minh Khang", age: 18, gpa: 7.9, status: "active" },
  { id: 2, name: "Vo Ngoc Han", age: 21, gpa: 8.7, status: "active" },
  { id: 3, name: "Bui Gia Bao", age: 17, gpa: 6.5, status: "inactive" },
  { id: 4, name: "Dang Thu Trang", age: 20, gpa: 9.0, status: "active" },
  { id: 5, name: "Phan Quang Huy", age: 19, gpa: 7.1, status: "active" },
  { id: 6, name: "Hoang Yen Nhi", age: 18, gpa: 8.2, status: "inactive" },
];

let nextId = 7;

const showMenu = () => {
  return prompt(
    `===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`
  );
};

const formatStudent = (s) => {
  return `ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`;
};

const formatList = (list, title = "Student List") => {
  if (list.length === 0) return `${title}\n(No records found)`;
  const divider = "-".repeat(60);
  const rows = list.map((s) => formatStudent(s)).join("\n");
  return `${title}\n${divider}\n${rows}\n${divider}\nTotal: ${list.length} student(s)`;
};

const createStudent = () => {
  const name = prompt("Nhập tên học sinh:");
  if (!name || name.trim() === "") return alert("Tên không được để trống!");

  const age = Number(prompt("Nhập tuổi:"));
  if (Number.isNaN(age) || age <= 0) return alert("Tuổi không hợp lệ!");

  const gpa = Number(prompt("Nhập điểm GPA (0 - 10):"));
  if (Number.isNaN(gpa) || gpa < 0 || gpa > 10) return alert("GPA không hợp lệ!");

  const statusInput = prompt("Nhập trạng thái (active / inactive):").trim().toLowerCase();
  if (statusInput !== "active" && statusInput !== "inactive")
    return alert('Trạng thái phải là "active" hoặc "inactive"!');

  const newStudent = {
    id: nextId++,
    name: name.trim(),
    age,
    gpa,
    status: statusInput,
  };

  students.push(newStudent);
  alert(`Thêm học sinh thành công!\n${formatStudent(newStudent)}`);
};

const readAllStudents = () => {
  alert(formatList(students, "===== ALL STUDENTS ====="));
};

const filterScholarship = () => {
  const candidates = students.filter((s) => s.gpa > 8.0);
  alert(formatList(candidates, "===== SCHOLARSHIP CANDIDATES (GPA > 8.0) ====="));
};

const updateStudent = () => {
  const id = Number(prompt("Nhập ID học sinh cần sửa:"));
  const student = students.find((s) => s.id === id);

  if (!student) return alert(`Không tìm thấy học sinh có ID: ${id}`);

  alert(`Đã tìm thấy:\n${formatStudent(student)}\n\nĐể trống nếu không muốn đổi.`);

  const newName = prompt(`Tên mới (hiện tại: ${student.name}):`);
  const newGpa = prompt(`GPA mới (hiện tại: ${student.gpa}):`);

  if (newName && newName.trim() !== "") student.name = newName.trim();

  if (newGpa && newGpa.trim() !== "") {
    const parsedGpa = Number(newGpa);
    if (!Number.isNaN(parsedGpa) && parsedGpa >= 0 && parsedGpa <= 10) {
      student.gpa = parsedGpa;
    } else {
      alert("GPA không hợp lệ, chưa cập nhật.");
    }
  }

  alert(`Cập nhật thành công!\n${formatStudent(student)}`);
};

const deleteStudent = () => {
  const id = Number(prompt("Nhập ID học sinh cần xóa:"));
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) return alert(`Không tìm thấy học sinh có ID: ${id}`);

  const removed = students[index];
  const confirmDelete = prompt(
    `Bạn có chắc muốn xóa?\n${formatStudent(removed)}\n\nNhập "yes" để xác nhận:`
  );

  if (confirmDelete && confirmDelete.trim().toLowerCase() === "yes") {
    students = students.filter((s) => s.id !== id);
    alert(`Đã xóa học sinh "${removed.name}".`);
  } else {
    alert("Đã hủy xóa.");
  }
};


const main = () => {
  let running = true;

  while (running) {
    const choice = showMenu();

    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        readAllStudents();
        break;
      case "3":
        filterScholarship();
        break;
      case "4":
        updateStudent();
        break;
      case "5":
        deleteStudent();
        break;
      case "6":
        
        break;
      case "7":
      
        break;
      case "8":
      
        break;
      case "0":
        alert("Goodbye! Thank you for using Student Management System.");
        running = false;
        break;
      case null:
        running = false;
        break;
      default:
        alert("Invalid choice! Please enter a number from 0 to 8.");
    }
  }
};

main();

    