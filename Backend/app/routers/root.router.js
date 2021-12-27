const express = require("express");
const router = express.Router();
const routerStudent = require("./student.router");
// url <=> http:localhost:3000/students
router.use("/students", routerStudent);
module.exports = router;
