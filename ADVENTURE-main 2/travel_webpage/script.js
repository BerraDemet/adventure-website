document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var scrollThreshold = 600; 

    window.addEventListener("scroll", function() {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  });

  function clearForm() {
    document.getElementById("contactForm").reset();
}