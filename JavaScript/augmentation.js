CAVESOFCLARITY = (function(oldNS){
	//here we are adding some new properties and functions to the CLAVEOFCLARITY closure
  var sandScript = "";

   oldNS.setSandScript= function(message){
      sandScript = message;
    };
  return oldNS;
})(CAVESOFCLARITY);
