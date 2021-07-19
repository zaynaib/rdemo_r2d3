/********************************************************************************************************************
 
    Blog post for this data visualization is located : https://www.d3-graph-gallery.com/graph/scatter_basic.html

**********************************************************************************************************************/

//! This step is not need if you are using r2d3 svg is automatically created

  var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 860 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
   svg
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


      // Add X axis
  var x = d3.scaleLinear()
  .domain([0, 4000])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 500000])
  .range([ height, 0]);
svg.append("g")
.attr("transform", "translate(" + margin.left + ",0)")

  .call(d3.axisLeft(y));


  // Add dots
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 3.5)
      .style("fill", "#69b3a2")