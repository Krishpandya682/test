// Select all h2 elements
const headings = document.querySelectorAll('h2');

// Initialize an array to store the parent elements (feature widgets)
const featureWidgets = [];

// Iterate through the headings to find those with the text "feature-widget"
headings.forEach(heading => {
  var tokens = headings.textContent.split(' ')
  console.log("text : ", headings.textContent);
  console.log("Tokens : ", tokens);
  if (tokens[0].trim() === 'feature-widget') {
    // Hide the h2 element
    heading.style.display = 'none';
    
    // Store the parent element of the matched h2
    featureWidgets.push(heading.parentNode);
  }
});

// Function to wrap content inside a new div with the specified class name
function wrapContentInDiv(parent, className) {
  // Create the new div
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = className;

  // Move all child elements of the parent into the new div
  while (parent.firstChild) {
    wrapperDiv.appendChild(parent.firstChild);
  }

  // Append the new div back to the parent
  parent.appendChild(wrapperDiv);
}

// Iterate over each feature widget to add classes and wrap content
featureWidgets.forEach(featureWidget => {
  // Find all .row elements within the feature widget
  const rowElements = featureWidget.querySelectorAll('.row');

  rowElements.forEach(row => {
    // Get all .col-800 elements within the current row
    const colElements = row.querySelectorAll('.col-800');

    // Check if there are at least two .col-800 elements
    if (colElements.length >= 2) {
      // Wrap the first .col-800 in a div with the class 'feature-widget-item-left'
      wrapContentInDiv(colElements[0], 'feature-widget-item-left');

      // Wrap the second .col-800 in a div with the class 'feature-widget-item-right'
      wrapContentInDiv(colElements[1], 'feature-widget-item-right');
    }
  });

});
