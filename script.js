// Select all h2 elements
const headings = document.querySelectorAll("h2");

// Initialize an array to store the feature widgets and their properties
const featureWidgets = [];

// Function to hide an element
function hideElement(element) {
  element.style.display = "none";
}

// Function to wrap content inside a new div with the specified class name
function wrapContentInDiv(parent, className) {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = className;

  // Move all child elements of the parent into the new div
  while (parent.firstChild) {
    wrapperDiv.appendChild(parent.firstChild);
  }

  // Append the new div back to the parent
  parent.appendChild(wrapperDiv);
  return wrapperDiv;
}

// Function to assign the 'feature-widget-text' class to the appropriate div
function assignFeatureWidgetTextClass(div, properties) {
  div.classList.add("feature-widget-text");
  div.classList.add("feature-widget-bg-"+properties.bgColor);
}

// Function to strip prefix from a class name
function stripPrefix(className) {
  return className.split("-")[1];
}

// Iterate through the headings to find those with the text "feature-widget"
headings.forEach((heading) => {
  const tokens = heading.textContent.trim().split(" ");
  if (tokens[0] === "feature-widget") {
    // Hide the h2 element
    hideElement(heading);

    // Store the parent element and parsed properties
    const properties = {
      parent: heading.parentNode,
      imageLeft: tokens.includes("image-left"),
      bgColor: stripPrefix(tokens[2]), // Strip prefix from bgColor
      headingColor: stripPrefix(tokens[3]), // Strip prefix from headingColor
      textColor: stripPrefix(tokens[4]), // Strip prefix from textColor
      linkColor: stripPrefix(tokens[5]), // Strip prefix from linkColor
    };

    featureWidgets.push(properties);
  }
});

// Iterate over each feature widget to add classes and wrap content
featureWidgets.forEach((featureWidget) => {
  const rowElements = featureWidget.parent.querySelectorAll(".row");
  const imageLeft = featureWidget.imageLeft;

  rowElements.forEach((row) => {
    const colElements = row.querySelectorAll(".col-800");

    if (colElements.length >= 2) {
      const leftDiv = wrapContentInDiv(colElements[0], "feature-widget-item-left");
      const rightDiv = wrapContentInDiv(colElements[1], "feature-widget-item-right");

      if (imageLeft) {
        assignFeatureWidgetTextClass(rightDiv, featureWidget);
      } else {
        assignFeatureWidgetTextClass(leftDiv, featureWidget);
      }
    }
  });
});

// Log the featureWidgets array to see the parsed results
console.log(featureWidgets);
