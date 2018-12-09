// @TODO: YOUR CODE HERE!
d3.csv('assets/data/data.csv').then(function (data) {
    svg = d3.select('#scatter').append('svg')
    svg
     .attr('width', 1000)
     .attr('height', 500)
     .class
    console.log(data)
});
//You need to create a scatter plot between two of the data 
//variables such as Healthcare vs. Poverty or Smokers vs. Age.
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
  };
var svgWidth =1000;
var svgHeight = 500;

var Width = svgWidth - margin.left - margin.right;
var Height = svgHeight - margin.top - margin.bottom;
// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
//(the below chartGroup can be dataGroup)
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
  // d3.csv('assets/data/data.csv')
  //   .then(function(data) {
  
  //     // Step 1: Parse Data/Cast as numbers
  //     // ==============================
  //     data.forEach(function(data) {
  //       data.poverty = +data.poverty;
  //       data.healthcare = +data.healthcare;
  //     }));
//Using the D3 techniques we taught you in class, 

//create a scatter plot that represents each state with circle elements. You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. Your scatter plot should ultimately appear like the image at the top of this section.

//Include state abbreviations in the circles.

//Create and situate your axes and labels to the left and bottom of the chart.