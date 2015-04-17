var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
//var parseUrlencoded = bodyParser.Urlencoded({extended: false});


var locations = {
  'Fixed':'First floor',
  'Movable': 'Second floor',
  'Rotating': 'Penthouse'
};

router.route('/:name')
.all(function(request, response, next){
  var name = request.params.name;
  var blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = blockName;
  next();
})

.get(function(request, response){
  var location = locations[request.blockName];

  if(!location){
    response.status(404).json('No location found for ' + request.blockName);
  } else {
    response.json(location);
  }
});

module.exports = router;
