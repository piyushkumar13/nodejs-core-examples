'use strict';
var express = require('express');

var app = express();

app.use("/hellothere", function (req, res) {
    res.send("This is the express application.")
});

app.get("/message", function (req, res) {
    res.send("Welcome to express application");
});

app.get("/mymessage", function (req, res) {
    res.end("Welcome to express application with the end response");
});


app.listen(8888, function(){

    console.log("Server is started....");
});