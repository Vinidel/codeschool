var toolsForTheBug = [
  {bug:"termite", tool: "trebuchet"},
  {bug:"slug", tool: "sling"},
  {bug:"caterpillar", tool: "catapult"}
];

// function toolAssignment(number, tool){
//   eval("toolsForTheBug[" + number + "].tool = '" + tool + "'");
// }

function toolAssignment(number, tool){
 toolsForTheBug[number].tool = tool;
}

toolAssignment(1, "Sausage");
