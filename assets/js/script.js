/*=============== PRELOADER ===============*/
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");

  window.scrollTo(0, 0);
});

/*=============== COUNT DOWN ===============*/
// Set the target date for the countdown
var targetDate = new Date("July 20, 2024").getTime();

// Update the countdown every second
var countdownTimer = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the target date
  var distance = targetDate - now;

  // Calculate the number of days left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // If the countdown is over, display "Ended!"
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Ended!";
  } else {
    // Otherwise, display the number of days left
    document.getElementById("countdown").innerHTML = days;
  }
}, 1000);

/*=============== HEADER ===============*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar-link");

const scrollThreshold = 200; // Adjust this value as needed
const footerOffset = document.querySelector("footer").offsetTop;
const footerHeight = document.querySelector("footer").offsetHeight;

window.addEventListener("scroll", function () {
  let top = window.scrollY;

  if (top >= scrollThreshold) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }

  let activeSectionFound = false;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Check if scroll position is within the section bounds and not in the footer
    if (top >= offset && top < offset + height && top < footerOffset) {
      activeSectionFound = true;
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar-link[href*=" + id + "]")
          .classList.add("active");
      });

      // Remove the fragment identifier from the URL
      history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.search
      );
    }
  });

  // Only highlight "Home" link if no other section is active, if we are at the top, or if we are in the footer
  if ((!activeSectionFound || top < 150) && top < footerOffset - footerHeight) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    document
      .querySelector('.navbar-link[href*="home"]')
      .classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.scrollY < 150) {
    document
      .querySelector('.navbar-link[href*="home"]')
      .classList.add("active");
  }

  // Add click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").split("#")[1];
      const targetSection = document.getElementById(targetId);
      const offsetTop = targetSection.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});

/*=============== MOBILE MENU ===============*/
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

/*=============== SCROLL REVEAL ===============*/
document.addEventListener("DOMContentLoaded", function () {
  window.sr = ScrollReveal();

  if (window.innerWidth < 768) {
    var timelineContent = document.querySelectorAll(".timeline-content");
    timelineContent.forEach(function (element) {
      if (element.classList.contains("js--fadeInLeft")) {
        element.classList.remove("js--fadeInLeft");
        element.classList.add("js--fadeInRight");
      }
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInbottom", {
    origin: "bottom",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeIntop", {
    delay: 300,
    distance: "20px",
    origin: "top",
    easing: "ease-in-out",
    interval: 200,
  });
});

/*=============== BACK TO TOP ===============*/
// Function to show or hide the scroll-up button based on scroll position
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  if (scrollUpButton) {
    if (window.scrollY >= 350) {
      scrollUpButton.classList.add("show-scroll");
    } else {
      scrollUpButton.classList.remove("show-scroll");
    }
  }
};

// Function to smoothly scroll to the top when the button is clicked
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Add event listener for scroll to show/hide the button
window.addEventListener("scroll", scrollUp);

// Add event listener for click on the scroll-up button to scroll to the top
const scrollUpButton = document.getElementById("scroll-up");
if (scrollUpButton) {
  scrollUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTop();
  });
}

// Disable scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/*=============== open faq ===============*/
document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;
      var isActive = this.classList.toggle("active");

      // Close all panels except the current one
      var allPanels = document.getElementsByClassName("panel");
      for (var j = 0; j < allPanels.length; j++) {
        if (allPanels[j] !== panel) {
          allPanels[j].style.maxHeight = null;
        }
      }

      if (isActive) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    });
  }
});
