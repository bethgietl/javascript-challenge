// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tableData);

// Step 1: Loop through 'data' to add ufo sighting values for each column
tableData.forEach((ufoSighting) => {
  // Step 2: use d3 to append one table row `tr` for each ufo sighting object
  var row = tbody.append("tr");
  // Step 3: use 'Object.entries' to console.log each key and value
  Object.entries(ufoSighting).forEach(([key, value]) => {
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
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    //alert(inputElementCity);
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");
  
  
    // Get the value property of the input date element
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value");
    //alert(inputValueCity);
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");
  
    // Print the value to the console
    //console.log(inputValue);
    //alert(inputValue);
  
    // Filter data with datetime, city, state, country, & shape equal to input value
    var filteredData = tableData;
    if(inputValueDate) {
        filteredData = filteredData.filter(sighting => sighting.datetime === inputValueDate);    
    }
    if(inputValueCity) {
        filteredData = filteredData.filter(sighting => sighting.city === inputValueCity);
    }
    if(inputValueState) {
        filteredData = filteredData.filter(sighting => sighting.state === inputValueState);
    }
    if(inputValueCountry) {
        filteredData = filteredData.filter(sighting => sighting.country === inputValueCountry);
    }
    
    if(inputValueShape) {
        filteredData = filteredData.filter(sighting => sighting.shape === inputValueShape);
    }
  //console.log(filteredData);

  
  filteredData.forEach((userRecord) => {
    var row = tbody.append("tr"); 
    Object.entries(userRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};
