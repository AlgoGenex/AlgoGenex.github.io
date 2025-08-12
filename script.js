/* script.js */
// IntersectionObserver to add .show class when elements scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  // List of all animatable elements
  const elements = document.querySelectorAll(
    '.service-item, .about p, .faq-container, .contact p, .contact form, .contact-info, .hero h1, .hero .slogan, .btn, .section-title, .fade-in'
  );

  elements.forEach(el => {
    // Apply fade-in for above-the-fold elements on load
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      el.classList.add('show');
    } else {
      observer.observe(el);
    }
  });
});

// Navbar desktop - mobile
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu
hamburger.addEventListener("click", function () {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Mobile dropdown toggle
document.querySelectorAll(".mobile-dropdown .dropbtn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
});

// Close mobile menu & dropdown when clicking a link
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none"; // Close menu
    mobileMenu.querySelectorAll(".dropdown-content").forEach(dd => dd.style.display = "none"); // Close dropdowns
  });
});
