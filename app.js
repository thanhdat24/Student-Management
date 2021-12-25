const express = require("express");
const app = express();
const port = 3000;

// Chú ý: chuyển req, res về json để tiện thao tác
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// lấy danh sách học sinh (url <=> http://localhost:3000/students)
app.get("/students", (req, res) => {
  res.send("lấy danh sách học sinh");
});

// lấy thông tin chi tiết của học sinh  (url <=> http://localhost:3000/students/1)
app.get("/students/:id", (req, res) => {
  const params = req.params;
  console.log("params", params);
  const { id } = params;
  res.send("lấy thông tin chi tiết cuar học sinh có id là : " + id);
});

// thêm học sinh  (url <=> http://localhost:3000/students)
app.post("/students", (req, res) => {
  const student = req.body;
  console.log(student);
  res.send("thêm học sinh");
});

// cập nhật học sinh  (url <=> http://localhost:3000/students/1)
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const student = req.body;
  console.log("id :", id);
  console.log("student : ", student);
  res.send("cập nhật học sinh");
});

// xoá học sinh  (url <=> http://localhost:3000/students/1)
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  res.send("xoá học sinh có id là : " + id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
