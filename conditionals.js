var totalGen = 19;
var totalMW = 0;


for(var genNumber = 1; genNumber <= totalGen; genNumber++){
  
  if(genNumber <= 4 && genNumber%2 == 0){
    totalMW += 62;
    console.log("Generator #" + genNumber +" is on, adding 62 MW, for a total of " + totalMW + " MW!");
  }else if (genNumber%2 == 0){
    totalMW += 124;
    console.log("Generator #" + genNumber + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }else{
     console.log("Generator #"+ genNumber + " is off.");
  }
  
}