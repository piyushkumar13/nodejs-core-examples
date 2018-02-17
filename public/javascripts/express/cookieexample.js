'use strict';
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

/*
To check if your cookie is set or not, just go to your browser, fire up the console, and enter −
console.log(document.cookie);
 */
app.get("/setCookie", function (req, res) {
    res.cookie("myFirstCookie", "Piyush");
    res.end("Cookie is set successfully.");
});

app.get("/clearCookie", function (req, res) {

    console.log("The cookie is :: ", req.cookies.myFirstCookie);
    console.log("Clearing cookie ... ");
    res.clearCookie("myFirstCookie");
    res.end("Cookie is cleared");

});


app.listen(8888, function () {
    console.log("The server is started...");
});