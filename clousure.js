function warningMaker(obstacle) {

		return function(){
			alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
		};
}



function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");

icebergAlert();




function warningMaker(obstacle) {
  return function(number, location) { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +  location + "!"
    );
  };
}


function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");

function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count + " today for " + obstacle + " danger."
          
    );
  };
}

