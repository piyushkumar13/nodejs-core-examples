'use strict';

var express = require('express');
var app = express();

app.set("views", "../../../views");
app.set("view engine", "ejs");

app.get("/index", function (req, res) {

    res.render("index", {
        "title": "Piyush's Page",
        "userId": "pkumar"
    });

});

app.listen(8888, function () {
    console.log("server is started...");
});

