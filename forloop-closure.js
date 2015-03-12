function makeTargetAssigner(sharks, targets) {
  
  
  return function(shark){
    
    for(var i = 0; i <= sharks.length; i++){
      if(shark == sharks[i]){
       console.log("What up, " + shark + "!\n" +
               "There've been " + targets[i] + " sightings in our 'hood!\n" +
                "Time for a swim-by lasering, homie!");
      }
    }   
  };
}

var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");