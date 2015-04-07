var express = require('express');
var app = express();


app.get('/tweets', function(request, response){
	response.sendFile(__dirname + '/tweets.html');
  response.end();
});

app.listen(8080);
