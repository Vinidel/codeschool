var express = require('express');
var app = express();

//this uses the logger middleware in all requests of the page
var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

var dynamicBlocks = {
  'Fixed':'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};


//working with params on the request
app.get('/blocks', function (request, response) {
  var blocks = ['Fixed','Movable','Rotating'];
  if(request.query.limit >= 0){
    response.json(blocks.slice(0, request.query.limit));
  }else {
    response.json(blocks);
  }
});

//adding a dynamic route
app.get('/dynamic-blocks/:name', function(request, response){
  var description = dynamicBlocks[request.params.name];
  if(!description){
    response.status(404).json('No description found for ' + request.params.name);
  } else {
    response.json(description);
  }
});





app.listen(3000, function(){
	console.log('Running Express');
});
