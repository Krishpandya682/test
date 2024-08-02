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
// Function to assign the 'feature-widget-item-text' class and other classes based on properties
function assignFeatureWidgetTextClass(div, properties) {
  div.classList.add("feature-widget-item-text");
  div.classList.add("feature-widget-bg-" + properties.bgColor);

  // Add class to h2 tags
  const h2Tags = div.querySelectorAll("h2");
  h2Tags.forEach((h2) => {
    h2.classList.add("feature-widget-text-" + properties.headingColor);
  });

  // Add class to p tags
  const pTags = div.querySelectorAll("p");
  pTags.forEach((p) => {
    p.classList.add("feature-widget-text-" + properties.textColor);
  });

  // Add class to a tags
  const aTags = div.querySelectorAll("a");
  aTags.forEach((a) => {
    a.classList.add("feature-widget-text-" + properties.linkColor);
  });
}

// Function to strip prefix from a class name
function stripPrefix(className) {
  return className.split("-")[1];
}

// Select all h2 elements
const headings = document.querySelectorAll("h2");

// Initialize an array to store the feature widgets and their properties
const featureWidgets = [];

// Iterate through the headings to find those with the text "feature-widget"
headings.forEach((heading) => {
  console.log(heading.textContent);
  console.log(heading.textContent.split(":")[1].trim());
  
  if (heading.textContent.includes("feature-widget")) {
    const content = heading.textContent.split(":")[1].trim();
    const tokens = content.split(" ");

    // Hide the h2 element
    heading.style.display = "none";

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
      const leftDiv = wrapContentInDiv(
        colElements[0],
        "feature-widget-item-left"
      );
      const rightDiv = wrapContentInDiv(
        colElements[1],
        "feature-widget-item-right"
      );

      if (imageLeft) {
        assignFeatureWidgetTextClass(rightDiv, featureWidget);
      } else {
        assignFeatureWidgetTextClass(leftDiv, featureWidget);
      }
    }
  });
});

// Get all the feature widget items
let featureWidgetItems = document.getElementsByClassName(
  "feature-widget-item-left"
);
let featureWidgetsArray = [];

// Iterate over each feature widget item
Array.from(featureWidgetItems).forEach((widgetItem) => {
  let featureWidget =
    widgetItem.parentNode.parentNode.parentNode.parentNode.parentNode;
  featureWidget.classList.add("feature-widget");
  featureWidgetsArray.push(featureWidget);
});

// Check each feature widget if its left item has an image
featureWidgetsArray.forEach((featureWidget) => {
  // Get the left column
  let leftCol = featureWidget.getElementsByClassName(
    "feature-widget-item-left"
  )[0].parentNode;

  // Check if left item has an image
  let imageTags = leftCol.getElementsByTagName("img");
  if (imageTags.length > 0) {
    let mobileCol = leftCol.cloneNode(true);
    mobileCol.classList.add("feature-widget-image-col-mobile");

    leftCol.classList.add("feature-widget-image-col-desktop");

    leftCol.parentNode.appendChild(mobileCol);
  }
});

// Move the feature-widgets to the main content
let mainContent = document.getElementById("main-content");
featureWidgetsArray.forEach((featureWidget) => {
  featureWidget.parentNode.removeChild(featureWidget);
  mainContent.appendChild(featureWidget);
});
