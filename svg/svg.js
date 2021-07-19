// Variables which will be used to set the width of our SVG wrapper to fit the screen and set the height to 400 pixels
const svgWidth = "100%";
const svgHeight = "400";

// Selects the '#svg-area' div and appends an SVG wrapper to it with the specified height and width. Also creates a variable which references the SVG.

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

svg
    .append("circle")
    .attr("cx",190)
    .attr("cy",80)
    .attr("r",40)
    //.stroke("blue")


svg
  .append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("width", 100)
  .attr("height", 100)
  .attr("fill", "blue");