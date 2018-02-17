'use strict';

var express = require('express');
var employeesRouter = express.Router();

var employees = [
    {
        "name": "Piyush",
        "company": "ABC",
        "Location": "Bangalore"
    },
    {
        "name": "Satish",
        "company": "ABC",
        "Location": "Bangalore"
    },
    {
        "name": "Iswar",
        "company": "ABC",
        "Location": "Bangalore"
    }
];

employeesRouter.get("/profile", function (req, res) {
    res.json(employees); // res.json(..) method sets the Content-Type:application/json; charset=utf-8 in the response headers.
});

module.exports  = employeesRouter;