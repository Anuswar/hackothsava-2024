/*=============== PRELOADER ===============*/
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");

  window.scrollTo(0, 0);
});

/*=============== COUNT DOWN ===============*/
// Set the date we're counting down to
var countDownDate = new Date();

countDownDate.setDate(countDownDate.getDate() + 30);

// Update the count down every 1 second
var countdownFunction = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
            
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
            
  // Time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
  // Display the result in the element with class="span"
  var countdownElement = document.querySelector('.span');
  countdownElement.innerHTML = days;
            
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    countdownElement.innerHTML = "Ended!";
  }  
}, 1000);


'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
navbar.classList.toggle("active");
this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
navbarLinks[i].addEventListener("click", function () {
navbar.classList.remove("active");
navbarToggler.classList.remove("active");
});
}

/*=============== HEADER ===============*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
if (window.scrollY >= 200) {
header.classList.add("active");
backTopBtn.classList.add("active");
} else {
header.classList.remove("active");
backTopBtn.classList.remove("active");
}
});

/*=============== SCROLL REVEAL ===============*/
document.addEventListener("DOMContentLoaded", function() {  
  window.sr = ScrollReveal();
    
  if (window.innerWidth < 768) {
    var timelineContent = document.querySelectorAll('.timeline-content');
    timelineContent.forEach(function(element) {
  
      if (element.classList.contains('js--fadeInLeft')) {                
        element.classList.remove('js--fadeInLeft');
        element.classList.add('js--fadeInRight');
      }  
    });
       
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
    
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',   
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }
    
  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
  
  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
});

