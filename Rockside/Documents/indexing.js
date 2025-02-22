var slideIndex = 1;
showSlides(slideIndex);

// Automatic slideshow
var slideInterval = setInterval(function() { 
  plusSlides(1);
}, 10000); // Change slide every 10 seconds

function plusSlides(n) {
  clearInterval(slideInterval); // Clear interval before changing slide
  slideInterval = setInterval(function() { 
    plusSlides(1);
  }, 10000); // Reset interval

  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(slideInterval); // Clear interval before changing slide
  slideInterval = setInterval(function() { 
    plusSlides(1);
  }, 10000); // Reset interval

  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  fadeIn(slides[slideIndex-1]); // Apply fade-in effect
}

function fadeIn(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
        clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Add event listener to close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('mySidebar');
  var openbtn = document.getElementsByClassName('openbtn')[0];
  
  // Close sidebar if clicked outside of it and it's open
  if (event.target !== sidebar && event.target !== openbtn && sidebar.style.width === '250px') {
    closeNav();
  }
});