'use strict';
var http = require('http');
var fs = require('fs');

function send404Response(req,res){

    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("Page not found.");
    res.end();

}

function serveRequest(req, res) {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("../../../views/index.html").pipe(res);
    }
    else {
        send404Response(req,res);
    }
}

http.createServer(serveRequest).listen(8888);

console.log("The server is started....");