'use strict';
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("This is my server");
    res.end();

}).listen(8888);

console.log("The server is started");