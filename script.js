console.log("test2");

// Select all h2 elements
const headings = document.querySelectorAll('h2');

// Initialize an array to store the parent elements (feature widgets)
const featureWidgets = [];

// Iterate through the headings to find those with the text "feature-widget"
headings.forEach(heading => {
  if (heading.textContent.trim() === 'feature-widget') {
    // Store the parent element of the matched h2
    featureWidgets.push(heading.parentNode);
  }
});

// Set the color of each feature widget to red
featureWidgets.forEach(featureWidget => {
  featureWidget.style.color = 'red';
});
