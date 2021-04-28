// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20), viewer="browser"

var barHeight = Math.floor(height / data.length);

svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('width', function(d) { return d * width; })
    .attr('height', barHeight)
    .attr('y', function(d, i) { return i * barHeight; })
    .attr('fill', 'steelblue');