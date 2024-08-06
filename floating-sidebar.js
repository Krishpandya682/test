window.onload = function() {
    // Get the elements
    var col8009 = document.querySelector('.col-800-9');
    var col8003 = document.querySelector('.col-800-3');
    
    // Set col-800-9 to full width
    col8009.style.width = '100%';
    col8009.style.float = 'left'; // Ensure it occupies the full width

    // Set col-800-3 to float left inside col-800-9
    col8003.style.float = 'left';
    col8003.style.width = '25%'; // Adjust if needed

    // Move col-800-3 to the start of col-800-9
    if (col8009 && col8003) {
        // Insert col-800-3 at the beginning of col-800-9
        col8009.insertBefore(col8003, col8009.firstChild);
    }
};
