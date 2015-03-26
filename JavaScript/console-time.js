var array = ["Inverted Peninsula", ",",
  "Inverted Peninsula", ", ", "I", "—",
  "P", "...", "hmmm", "."];
var internalThoughts = "";

console.time("Test");

internalThoughts = array.join(" ");

console.time("innerTest");
console.log(internalThoughts);
console.timeEnd("innerTest");

console.timeEnd("Test");


Array.prototype.killTheInsolent = function(){};
Array.prototype.countPopulace = function(){};
Array.prototype.countUndeadPopulace = function(){};
Array.prototype.insecticide = function(){};
Array.prototype.shadowProvider = function(){};

var invertedPeninsula = {
  inhabitants: ["Nipping Global Variable", "Sneaky For-in", "Bulging Blocking Script"]
};

function populationGetter(){
  var population = invertedPeninsula.inhabitants;
  var list = "";
console.time("test");

  for(var i = 0, ff = population.length; i < ff; i++){
    list += (population[i] + " ");
  }

console.timeEnd("test");
  return list.trim();
}

populationGetter();
