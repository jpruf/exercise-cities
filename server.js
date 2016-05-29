//require
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

require('./server/config/mongoose.js')

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + './static'));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');



var mongoose = require('mongoose');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
	console.log('on 8000');
})