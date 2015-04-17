var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var parseUrlencoded = bodyParser.urlencoded({ extended: false});

//this uses the logger middleware in all requests of the page
var logger = require('./logger');
app.use(logger);
app.use(express.static('public'));

//using routes in modules
var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

var locations = require('./routes/locations');
app.use('/locations', locations);




app.listen(3000, function(){
	console.log('Running Express');
});
