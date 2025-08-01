/* script.js */
// IntersectionObserver to add .show class when elements scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.section').forEach(sec => {
    observer.observe(sec);
    sec.querySelectorAll('.slide-in-left, .slide-in-up, .slide-in-right').forEach(el => {
      el.classList.remove('show');
    });
  });
});
