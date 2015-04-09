var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  console.log("Client connected...");
  redisClient.lrange('questions',0,-1, function(error, questions){
    questions.forEach(function(question){
    	client.emit('question', question);
    });
  });

  // listen for answers here
  client.on('answer', function(question, answer){
  		client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);

      //adding to redis the questions
      redisClient.lpush('questions', question, function(){
      	redisClient.ltrim('questions', 0, 19);
      });
    }
  });
});

server.listen(8080);
