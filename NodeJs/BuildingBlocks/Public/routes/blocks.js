var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var dynamicBlocks = {
  'Fixed':'Fastened securely in position',
  'Movable': 'Capable of being moved',
  'Rotating': 'Moving in a circle around its center'
};


router.route('/')
.get(function (request, response) {
  // var blocks = ['Fixed','Movable','Rotating'];
  // if(request.query.limit >= 0){
  //   response.json(blocks.slice(0, request.query.limit));
  // }else {
  //   response.json(blocks);
  // }
  response.json(Object.keys(dynamicBlocks));
});

.post(parseUrlencoded, function (request, response) {
  var newBlock = request.body;
  dynamicBlocks[newBlock.name] = newBlock.description;

  response.status(201).json(newBlock.name);
});

router.route('/:name')
.all(function(request, response, next){
  var name = request.params.name;
  var blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = blockName;
  next();
})
//adding a dynamic route
.get(function(request, response){
  var description = dynamicBlocks[request.blockName];

  if(!description){
    response.status(404).json('No description found for ' + request.blockName);
  } else {
    response.json(description);
  }
});

.delete(function(request, response){
  delete dynamicBlocks[request.blockName];
  response.sendStatus(200);
});


module.exports = router;
