'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var studentsRouter = require("../../../routes/studentsrouter");
var employeesRouter = require("../../../routes/employeesrouter");

app.use(bodyParser.json()); // I can even use the bodyParser in studentrouter.js file as studentRouter.use(bodyParser.json())
app.use("/students", studentsRouter);
app.use("/employees", employeesRouter);

app.listen(8888, function () {
    console.log("Server is started...");
});