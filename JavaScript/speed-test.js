/*
Speed Test Class

Performs a given test a certain amount of times and returns an average of the execution time

From the JavaScript Best Practices course by Code School
https://www.codeschool.com/courses/javascript-best-practices
*/

var SpeedTest = function(testImplement,testParams,repetitions){
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function(){
    if( this.testImplement( this.testParams ) === false ){
      alert("Yo, man, that test failed with those parameters.");
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++){
      beginTime = +new Date();
      this.testImplement( this.testParams );
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " + this.repetitions + ": " + this.average);
  }
};
