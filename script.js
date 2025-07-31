// script.js

// Reveal animations
ScrollReveal().reveal('.hero .logo', {
  delay: 200,
  duration: 1000,
  origin: 'top',
  distance: '50px'
});

ScrollReveal().reveal('.slogan', {
  delay: 400,
  duration: 1000,
  origin: 'bottom',
  distance: '30px'
});

ScrollReveal().reveal('.services h2', {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '30px'
});

ScrollReveal().reveal('.service', {
  interval: 200,
  duration: 1000,
  origin: 'bottom',
  distance: '40px'
});

ScrollReveal().reveal('.about h2, .about p', {
  delay: 300,
  duration: 1000,
  origin: 'right',
  distance: '40px'
});

ScrollReveal().reveal('.contact h2, form', {
  delay: 300,
  duration: 1000,
  origin: 'bottom',
  distance: '40px'
});
