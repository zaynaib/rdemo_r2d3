# D3 visualizations are made up of SVG elements.
# SVG is a special type of markup language that allows you
# to create scalar graphics on a HTML page
# Some SVG elements include rect,circle, path

# Here is a code pen example of how SVG looks like in html https://codepen.io/OG/pen/YaygOY
# List of basic SVG shapes https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

# The example belows shows you how to append a svg element in d3


#load the r2d3 pacakge library
library(r2d3)

#svg is automatically loaded with the package
#The svg container for the visualization

svg
    .append("circle")
    .attr("cx",190)
    .attr("cy",80)
    .attr("r",40)
    .stroke("blue")


svg
  .append("rect")
  .attr("x", 100)
  .attr("y", 100)
  .attr("width", 100)
  .attr("height", 100)
  .attr("fill", "blue");