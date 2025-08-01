/* script.js */
// IntersectionObserver to add .show class when elements scroll into view
/* script.js */
// IntersectionObserver to add .show class when elements scroll into view
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.3
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Observe all elements with slide-in classes
    const elements = document.querySelectorAll(
        '.service-item, .about p, .contact form, .contact-info, .hero h1, .hero .slogan, .btn, .section-title'
    );
    elements.forEach(el => observer.observe(el));
});
