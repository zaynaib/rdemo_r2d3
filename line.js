
    //Step 1 Understand the data structure



    //accessor functions
    const yAccessor = d => d.temperatureMax;

    //parses a string into a date object
    const dateParser = d3.timeParse("%Y-%m-%d");
    const xAccessor = d => dateParser(d.date);


    let dimensions = {
        width: window.innerWidth * 0.9,
        height: 400,
        margin:{
            top:15,
            right:15,
            bottom:40,
            left:60,
        },
    }

    //compute size or bounds based on the dimensions object

    dimensions.boundedWidth = dimensions.width - dimensions.margin.left
    dimensions.boundedHeight= dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    const wrapper = svg
                .attr("width",dimensions.width)
                .attr("height", dimensions.height)

    //this is where all my elements are going to be. Inside the bounds of the wrapper
    const bounds = wrapper.append("g")
                    .style("transform", `translate(${dimensions.margin.left}px,${dimensions.margin.top}px)`)


    //set up your scales
             
    //y-scale
    const yScale = d3.scaleLinear()
                    .domain(d3.extent(data,yAccessor))
                    .range([dimensions.boundedHeight,0])

    console.log(yScale(32))


    //x-scale

    const xScale = d3.scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])

    //line generator
    const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

    //draw the line
    const line = bounds.append("path")
    .attr("d", lineGenerator(data))
    .attr("fill", "none")
    .attr("stroke", "#af9358")
    .attr("stroke-width", 2)

    const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
      .style("transform", `translateY(${
        dimensions.boundedHeight
      }px)`)



