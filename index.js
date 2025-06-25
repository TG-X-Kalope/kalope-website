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
      threshold: 0.2, 
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

 
 
 


// form submit

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Form submit hone se rokein

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    if (!message) {
      alert("Message field is empty! Please enter your message.");
      return;
    }

    let whatsappNumber = "919334201643"; // Apna number yaha replace karein
    let whatsappMessage = ` Form Submission:
    *Name:* ${name}
    *Email:* ${email}
    *Phone:* ${phone}
    *Message:* ${message}`;

    let encodedMessage = encodeURIComponent(whatsappMessage);
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });
});

 






  








  
  