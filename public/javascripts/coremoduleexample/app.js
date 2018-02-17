var fs = require('fs');
var path = require('path');

fs.writeFileSync("file1.txt", "This is the file system example");
console.log(fs.readFileSync('file1.txt').toString());

var examplePath = '/Users/pkumar//Documents/Piyush Workspace//nodejs-core-examples/public/javascripts/sharedstateexamplescripts/script1.js';
console.log(path.normalize(examplePath));
console.log(path.dirname(examplePath));
console.log(path.basename(examplePath));
console.log(path.extname(examplePath));
console.log(__dirname);
console.log(__filename);
