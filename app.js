var express = require("express");

var app = express();
var routes = require('./Server/routes/employees');
console.log("inside app js");
app.use('/employee', routes);
app.listen(9090);
