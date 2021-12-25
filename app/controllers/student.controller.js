const {
  getList,
  getDetail,
  create,
  updateById,
  deleteById,
} = require("../services/student.services");
const getStudentList = (req, res) => {
  const studentList = getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found!");
  }
};

const getStudentDetails = (req, res) => {
  const params = req.params;
  const { id } = params;
  const student = getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found!");
  }
};

const createStudent = (req, res) => {
  let student = req.body;

  const newStudent = create(student);
  res.status(201).send(newStudent);
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const student = req.body;
  const studentUpdate = updateById(id, student);
  if (studentUpdate) {
    res.status(200).send(studentUpdate);
  } else {
    res.status(404).send("Not Found!");
  }
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  const student = deleteById(id);
  if (student) {
    res.status(200).send(student);
  }
  res.status(404).send("Not Found!");
};

module.exports = {
  getStudentList,
  getStudentDetails,
  createStudent,
  updateStudent,
  deleteStudent,
};
