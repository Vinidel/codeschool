var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});
//this uses the logger middleware in all requests of the page
var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

var dynamicBlocks = {
  'Fixed':'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};

var locations = {
  'Fixed':'First floor',
  'Movable': 'Second floor',
  'Rotating': 'Penthouse'
};

//using the app.param to parse the params in the request
app.param('name', function(request, response, next){
  var name = request.params.name;
  var blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = blockName;
  next();
});


//working with params on the request
app.get('/blocks', function (request, response) {
  // var blocks = ['Fixed','Movable','Rotating'];
  // if(request.query.limit >= 0){
  //   response.json(blocks.slice(0, request.query.limit));
  // }else {
  //   response.json(blocks);
  // }
  response.json(Object.keys(dynamicBlocks));
});

//adding a dynamic route
app.get('/dynamic-blocks/:name', function(request, response){
  var description = dynamicBlocks[request.blockName];

  if(!description){
    response.status(404).json('No description found for ' + request.blockName);
  } else {
    response.json(description);
  }
});

app.get('/locations/:name', function(request, response){
  var location = locations[request.blockName];

  if(!location){
    response.status(404).json('No location found for ' + request.blockName);
  } else {
    response.json(location);
  }
});

app.post('/blocks', parseUrlencoded, function (request, response) {
  var newBlock = request.body;
  dynamicBlocks[newBlock.name] = newBlock.description;

  response.status(201).json(newBlock.name);
});

app.delete('/blocks/:name', function(request, response){
  delete dynamicBlocks[request.blockName];
  response.sendStatus(200);
});

app.listen(3000, function(){
	console.log('Running Express');
});
