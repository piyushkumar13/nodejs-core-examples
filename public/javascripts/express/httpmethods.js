'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/* This is required to parse the form data which is of type application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.end(JSON.stringify(req.query));
});

app.get("/index", function (req, res) {
    res.sendFile("form.html", {root: "../../../views"})
});

app.post("/submit", function (req, res) {
    res.end(JSON.stringify(req.body))
});

app.listen(8888, function () {
    console.log("Server is started ....");
});