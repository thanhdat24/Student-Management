const { DataTypes } = require("sequelize");

const createModelStudent = (sequelize) => {
  return sequelize.define(
    "Student", // tên Model
    {
      // các column trong bảng
      fullName: {
        type: DataTypes.STRING, // loại dử liệu
        allowNull: false, // không cho null
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "students", // tên table trong database
      timestamps: true, // có đánh dấu mốc thời gian
    }
  );
};

module.exports = { createModelStudent };
