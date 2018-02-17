'use strict';

var express = require('express');
var studentsRouter = express.Router();


var students = [
    {
        "name": "Piyush",
        "company": "DCE",
        "Location": "Bangalore"
    },
    {
        "name": "Vikas",
        "company": "DCM",
        "Location": "Bangalore"
    },
    {
        "name": "Anand",
        "company": "BVCOE",
        "Location": "Bangalore"
    }
];

studentsRouter
    .get("/list", function (req, res) { // we can also do studentsRouter.route("/list").get(function(){...}).post(function(){...});
        res.status(200).json(students); // res.json(..) method sets the Content-Type:application/json; charset=utf-8 in the response headers.
    })
    .post("/create", function (req, res) {

        /*
        We can do it in the following way as well
        studentsRouter.post("/create", function (req, res) {

        console.log("Inside post method and the body is ::::", JSON.stringify(req.body));
        res.json(req.body);
        });

        */
        console.log("Inside post method and the body is ::::", JSON.stringify(req.body));
        res.json(req.body);
    })
    .put("/create/:id", function (req, res) {
        var responseObj = req.body;
        responseObj.id = req.params.id;
        res.json(responseObj);
    });


module.exports = studentsRouter;