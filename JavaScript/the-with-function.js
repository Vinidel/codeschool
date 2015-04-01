// Dhuun's pack o' goods
var pack = {
  foodPouch: ["carrot", "mystery meat", "apple", 42],
  addFood: function(foodItem) {
    this.foodPouch = this.foodPouch || [];
    this.foodPouch.push(foodItem);
  },
  feedBird: function(birdFood) {
    var food      = birdFood,
        foodIndex = this.foodPouch.indexOf(food);

    // If the exact food we want is not in the array,
    // check instead if the type of food is there.
    if (foodIndex === -1) {
      food = typeof food;
      for (var i = 0; i < this.foodPouch.length; i++) {
        if (typeof this.foodPouch[i] === food) {
          foodIndex = i;
          break;
        }
      }
    }

    // Check if we have the food in our pack.
    if (foodIndex >= 0) {
      console.log("You feed a beggar bird " +  food + ".");
      this.foodPouch.splice(foodIndex, 1);
    }
    else {
      console.log("Your pack lacks " + food + ", Dhuun.");
    }
  },
  // place in pack to keep your fire starting goods
  fireKit: {
    matchTin: {
      matches: 4,
      sparkPaper: 6
    }

  }
};

// extra matches held outside of pack
var matches = 3;

// var matches = 3;
// function lightCampfire(){
//   with(pack.fireKit.matchTin){
//     matches--;
//     sparkPaper--;
//     alert("Whoosh!");
//   }
// }

function lightCampfire(){
  var o = pack.fireKit.matchTin;
    o.matches--;
    o.sparkPaper--;
    alert("Whoosh!");

}
