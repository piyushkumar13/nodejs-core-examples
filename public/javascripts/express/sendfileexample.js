var express = require('express');

var app = express();

app.get("/file", function (req, res) {
    res.sendFile("index.html", {root : "../../../views"});
});

app.listen(8888, function(){
    console.log("Server is started.");
});