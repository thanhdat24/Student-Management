const { Student } = require("../model");

const getList = async () => {
  const studentList = await Student.findAll();
  if (studentList) {
    return studentList;
  } else {
    return "Not Found!";
  }
};

const getDetail = async (id) => {
  const student = await Student.findOne({ where: { id } });
  if (student !== -1) {
    return student;
  } else {
    return false;
  }
};

const create = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const updateById = async (id, student) => {
  const studentUpdate = await getDetail(id);
  if (studentUpdate !== -1) {
    studentUpdate.fullName = student.fullName;
    studentUpdate.age = student.age;
    studentUpdate.numberClass = student.numberClass;
    const studentUpdated = await studentUpdate.save();
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const studentDelete = await getDetail(id);
  if (studentDelete !== -1) {
    await Student.destroy({ where: { id } });
    return studentDelete;
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  create,
  updateById,
  deleteById,
};
