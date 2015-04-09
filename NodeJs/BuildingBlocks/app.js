var express = require('express');
var app = express();

//this uses the logger middleware in all requests of the page
var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function (request, response) {
  var blocks = ['Fixed','Movable','Rotating'];
  response.json(blocks);
});

app.listen(3000, function(){
	console.log('Running Express');
});
