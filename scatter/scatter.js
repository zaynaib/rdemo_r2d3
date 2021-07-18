/********************************************************************************************************************
 
    Blog post for this data visualization is located : https://www.d3-graph-gallery.com/graph/scatter_basic.html

**********************************************************************************************************************/

//! This step is not need if you are using r2d3 svg is automatically created

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, width ]);


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);


  // Add dots
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 3.5)
      .style("fill", "#69b3a2")