// Step 1 access the data

const xAccessor = function(d){
     return d.year;
}


const yAccessor = function(d){
    return d.value;
}


//Step 2 Create Chart dimensions

var margin = {top: 30, right: 30, bottom: 70, left: 60};
var width = width - margin.left - margin.right;
var height = height - margin.top - margin.bottom;

svg.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");


//Step 3: Create the Scales
var xScale = d3.scaleBand().range([0, width]).padding(0.4)
var yScale = d3.scaleLinear().range([height, 0]);


xScale.domain(data.map(function(d) { return xAccessor(d) }));
yScale.domain([0, d3.max(data, function(d) { return yAccessor(d); })]);

svg.append("g")
  .call(d3.axisLeft(yScale));

// Step 4 : Draw the data
svg.selectAll(".bar")
.data(data)
.enter().append("rect")
.attr("class", "bar")
.attr("x", function(d) { return xScale(d.year); })
.attr("y", function(d) { return yScale(d.value); })
.attr("width", xScale.bandwidth())
.attr("height", function(d) { return height - yScale(d.value); })
.attr("fill","blue")

//Step 5 : Draw peripherals
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(xScale));

