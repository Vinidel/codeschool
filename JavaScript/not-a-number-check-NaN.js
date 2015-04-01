function isThisNotANumberDontLie(data){
  return(typeof data === "number" && !NaN(data));
};
