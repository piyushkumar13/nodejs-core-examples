'use strict';
var createModule1Import = require('./public/javascripts/moduleexamplescripts/createmodule1.js');
createModule1Import();

var createModule2Import = require('./public/javascripts/moduleexamplescripts/createmodule2.js');
createModule2Import.myStatement();

var createModule3Import = require('./public/javascripts/moduleexamplescripts/createmodule3.js');
createModule3Import.printStatement();
createModule3Import.getMessage();