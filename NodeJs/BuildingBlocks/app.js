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
  var name = request.params.name;
  var blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  var description = dynamicBlocks[blockName];

  console.log('Name: ' + description);
  if(!description){
    response.status(404).json('No description found for ' + request.params.name);
  } else {
    response.json(description);
  }
  
});





app.listen(3000, function(){
	console.log('Running Express');
});
