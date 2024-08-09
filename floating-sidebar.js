window.onload = function () {
  // Get the elements
  var col8009 = document.querySelector(".col-800-9");
  var col8003 = document.querySelector(".col-800-3");


  // Set col-800-9 to full width
  col8009.style.width = "100%";
  col8009.style.maxWidth = "100%";

  // Set col-800-3 to float left inside col-800-9
  col8003.style.float = "left";
  col8003.style.width = "25%"; 
  col8003.style.marginRight = "1rem"; 

  col8003.parentElement.classList.remove("row")
};
