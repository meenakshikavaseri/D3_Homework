
//You need to create a scatter plot between two of the data 
//variables such as noHealthInsurance vs. Poverty 
var margin = {
  top: 20,
  right: 20,
  bottom: 100,
  left: 60
};
var svgWidth = 1000;
var svgHeight = 800;

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

//(the below scatterPlot can be dataGroup)
var scatterPlot = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv('assets/data/data.csv').then(function (figdata) {
  console.log(figdata);

 
  // Import Data
  figdata.forEach(function (data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
    console.log("healthcare:", data.healthcare);
    console.log("poverty:", data.poverty)
  });

  // xLinearScale function above csv import
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(figdata, d => d.poverty) * 0.95, d3.max(figdata, d => d.poverty) * 1.10])
    .range([0, width]);
  console.log(xLinearScale);

  // Create y scale function
  var yLinearScale = d3.scaleLinear()
    .domain([d3.min(figdata, d => d.healthcare) * 0.8, d3.max(figdata, d => d.healthcare) * 1.2])
    .range([height, 0]);
  console.log(yLinearScale);
  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // // append x axis
  scatterPlot.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  scatterPlot.append("g")
    .attr("stroke", "black")
    .call(leftAxis);

  // append initial circles
  var toolTip = d3.select("body")
    .append("div")
    .attr("class", "tooltip");

  // append initial circles
  var circlesGroup = scatterPlot.selectAll("circle")
    .data(figdata)
    .enter()
    .append("circle")
    .attr("cx", (d) => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", 9)
    .attr("fill", "lightblue")

  //append circles to data points
  scatterPlot.selectAll("xxx")
    .data(figdata)
    .enter()
    .append("text")
    .attr("x", (d) => xLinearScale(d.poverty))
    .attr("y", d => yLinearScale(d.healthcare))
    .attr("text-anchor", "middle")
    .attr("text-color", "grey")
    .attr("font-size", 8)
    .text(d => d.abbr)

  
  //append chart axes


  scatterPlot.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 0)
    .attr("x", 0 - (height / 2) - 30)
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text(" Lacks HealthInsurance(%)");
 

  scatterPlot.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 5})`)
    .attr("class", "axisText")
    .text("In Poverty(%)");
 
});

