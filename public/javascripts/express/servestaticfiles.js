var express = require('express');

var app = express();

console.log(process.cwd());

app.use("/static", express.static("../../../views"));
app.listen(8888, function (req, res) {
    console.log("Server is started ...");
});
