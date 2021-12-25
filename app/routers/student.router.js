const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getStudentDetails,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

// lấy danh sách học sinh (url <=> http://localhost:3000/students)
studentRouter.get("/", getStudentList);

// lấy thông tin chi tiết của học sinh  (url <=> http://localhost:3000/students/1)
studentRouter.get("/:id", getStudentDetails);

// thêm học sinh  (url <=> http://localhost:3000/students)
studentRouter.post("/", createStudent);

// cập nhật học sinh  (url <=> http://localhost:3000/students/1)
studentRouter.put("/:id", updateStudent);

// xoá học sinh  (url <=> http://localhost:3000/students/1)
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
