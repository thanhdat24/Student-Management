const {
  getList,
  getDetail,
  create,
  updateById,
  deleteById,
} = require("../services/student.services");
const getStudentList = async (req, res) => {
  const studentList = await getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found!");
  }
};

const getStudentDetails = async (req, res) => {
  const params = req.params;
  const { id } = params;
  const student = await getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("Not Found!");
  }
};

const createStudent = async (req, res) => {
  let student = req.body;

  const newStudent = await create(student);
  res.status(201).send(newStudent);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = req.body;
  const studentUpdate = await updateById(id, student);
  if (studentUpdate) {
    res.status(200).send(studentUpdate);
  } else {
    res.status(404).send("Not Found!");
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  const studentDeleted = await deleteById(id);
  if (studentDeleted) {
    res.status(200).send(studentDeleted);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getStudentList,
  getStudentDetails,
  createStudent,
  updateStudent,
  deleteStudent,
};
