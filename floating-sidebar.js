window.onload = function () {
  // Get the elements
  var col8009 = document.querySelector(".col-800-9");
  var col8003 = document.querySelector(".col-800-3");

  // Rename classes
  if (col8009) {
    col8009.classList.remove("col-800-9");
    col8009.classList.add("col-800");
  }

  if (col8003) {
    col8003.classList.remove("col-800-3");
    col8003.classList.add("col-800");
  }

  // Set col-800-9 to full width
  col8009.style.width = "100%";
  col8009.style.float = "left"; // Ensure it occupies the full width

  // Set col-800-3 to float left inside col-800-9
  col8003.style.float = "left";
  col8003.style.width = "30%"; 
  col8003.style.paddingRight = "1rem"; 
  
  // Find the first div with class "section" inside col-800-9
  var firstSection = col8009.querySelector(".section");

  // Move col-800-3 before the first section div
  if (col8009 && col8003) {
    if (firstSection) {
      col8009.insertBefore(col8003, firstSection);
    } else {
      // If no section div is found, append col-800-3 at the end
      col8009.appendChild(col8003);
    }
  }
};
