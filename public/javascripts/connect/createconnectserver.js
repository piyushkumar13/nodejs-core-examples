'use strict';

var connect = require('connect');
var http = require('http');

var app = connect();

function displayMessage1(req,res,next){

    console.log("Inside the first display message middleware.");
    next();
}

function displayMessage2(req, res, next){

    console.log("Inside the second display message middleware.");
    next();
}

function myProfile(req, res){
    console.log("Inside the profile route.")
}

app.use(displayMessage1);
app.use(displayMessage2);
app.use("/profile", myProfile);

/* This is one way of creating web server.
http.createServer(app).listen(8888);
console.log("Server is starting ....");
*/
app.listen(8888, function () {
    console.log("Server is starting ....");
});
