module.exports = function(request, response, next){
  var start = +new Date();

  next();
};
