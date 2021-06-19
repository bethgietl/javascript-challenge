// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tableData);

// Step 1: Loop through 'data' to add ufo sighting values for each column
tableData.forEach((tableContents) => {
  // Step 2: use d3 to append one table row `tr` for each ufo sighting object
  var row = tbody.append("tr");
  // Step 3: use 'Object.entries' to console.log each key and value
  Object.entries(tableContents).forEach(([key, value]) => {
    // Step 4: append a cell to the row for each value in ufo sightings
    var column = row.append("td");
    column.text(value);  
  });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", runEnter);
function runEnter() {
  //alert('hi');
  tbody.html("");
  // prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input date and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input date element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  //alert(inputValue);

  // Filter data with datetime equal to input value
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  

  filteredData.forEach((userDate) => {
    var row = tbody.append("tr"); 
    Object.entries(userDate).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};
