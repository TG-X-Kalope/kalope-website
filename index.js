// Get the hamburger menu and navigation menu
const hamburger = document.getElementById('menu');
const navMenu = document.getElementById('navbar');

// Toggle the active class on the nav menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});



document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const targets = document.querySelectorAll(".inner-container, .work-grid");
    targets.forEach((target) => observer.observe(target));
  });

  // contact-section
 
  document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
  });



  








  
  