const express = require("express");
const app = express();
const port = 3000;

let studentList = [
  {
    id: 1,
    fullName: "Lê Thành Đạt",
    age: 18,
    numberClass: 12,
  },
  {
    id: 2,
    fullName: "Trần Thị Ngọc Diệp",
    age: 17,
    numberClass: 11,
  },
  {
    id: 3,
    fullName: "Nguyễn Văn B",
    age: 15,
    numberClass: 9,
  },
];

// Chú ý: chuyển req, res về json để tiện thao tác
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// lấy danh sách học sinh (url <=> http://localhost:3000/students)
app.get("/students", (req, res) => {
  res.status(200).send(studentList);
});

// lấy thông tin chi tiết của học sinh  (url <=> http://localhost:3000/students/1)
app.get("/students/:id", (req, res) => {
  const params = req.params;
  console.log("params", params);
  const { id } = params;
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found!");
  }
});

// thêm học sinh  (url <=> http://localhost:3000/students)
app.post("/students", (req, res) => {
  let student = req.body;
  student = {
    id: Math.random(),
    ...student,
  };
  studentList = [...studentList, student];

  res.status(201).send(student);
});

// cập nhật học sinh  (url <=> http://localhost:3000/students/1)
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    const updateStudent = { ...student, fullName, age, numberClass };
    studentList[index] = updateStudent;
    res.status(200).send(updateStudent);
  } else {
    res.status(400).send("Not Found!");
  }
});

// xoá học sinh  (url <=> http://localhost:3000/students/1)
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    studentList.splice(index, 1);
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
