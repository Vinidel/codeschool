var bitersBog = {
  critters: ["Nipping Global Variable",
             "Sneaky For-in",
             "Bulging Blocking Script"]
};

populationGetter(bitersBog);

function populationGetter( location ){
  var list = "";
  var numCritters = location.critters.length;
  for(var i = 0; i < numCritters; i++){
    list += location.critters[i];
  }
  return list.trim();
}
