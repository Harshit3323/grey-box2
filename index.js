function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 // Get the button element
const button = document.querySelector('.navbar-toggler');

// Get the image container element
const imageContainer = document.querySelector('.cap-img');

// Store the original top value
const originalTop = imageContainer.style.top;

// Add a click event listener to the button
button.addEventListener('click', () => {
  // If the current top value is the original value, increase it by 20 pixels
  if (imageContainer.style.top === originalTop) {
    imageContainer.style.top = `${parseInt(originalTop) + 20}px`;
  } else { // Otherwise, revert the top value to the original value
    imageContainer.style.top = originalTop;
  }
});