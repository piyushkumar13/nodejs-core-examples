'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.use("/useMyRoute", router);

router.get("/firstRoute", function (req, res) {
    res.send("This is in the first route.");
});

router.get("/secondRoute", function (req, res) {
    res.end("This is the second route.")
});

router.get("/thirdRoute/:name", function (req, res) {
    /*
    res.end(JSON.stringify(req.params)); res.send() method sends the response header Content-Type of "text/html" whereas res.end() method
    does not send any response header of Content-Type. Hence, by default it takes the Content-Type of "text/plain" or "application/json".
    To override the Content-Type in case of res.end(), use the following way.
    */
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(req.params));
    res.end();
});
app.listen(8888, function () {
    console.log("Server is started...")
});
