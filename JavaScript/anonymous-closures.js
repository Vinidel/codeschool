var CAVESOFCLARITY = (function () {

  // private property
  var treasureChests = 3;

  // everything inside the return statement is public
  return {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    SECRET: {
      openChest: function(){
        CAVESOFCLARITY.treasureChests--;
        alert("DA DADADA DAAAAAAA!");
      }
    }
  };
})();
