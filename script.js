document.addEventListener("DOMContentLoaded", function() {
  const slideEls = document.querySelectorAll('.slide-in');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  slideEls.forEach(el => observer.observe(el));
});
