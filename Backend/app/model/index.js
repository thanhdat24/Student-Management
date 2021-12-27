const { Sequelize } = require("sequelize");
const { DB, PASSWORD, USER, HOST, dialect } = require("../configs/db.config");
const { createModelStudent } = require("./student.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

// tạo model
const Student = createModelStudent(sequelize);

module.exports = { sequelize, Student };
