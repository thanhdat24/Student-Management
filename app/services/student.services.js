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

const getList = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

const getDetail = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    return student;
  } else {
    return false;
  }
};

const create = (student) => {
  const newStudent = {
    id: Math.random(),
    ...student,
  };
  studentList = [...studentList, student];
  return newStudent;
};

const updateById = (id, student) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const studentOld = studentList[index];
    const studentUpdate = { ...studentOld, ...student };
    studentList[index] = studentUpdate;
    return studentUpdate;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    studentList.splice(index, 1);
    return student;
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
