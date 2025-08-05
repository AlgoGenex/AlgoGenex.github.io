/* script.js */
// IntersectionObserver to add .show class when elements scroll into view
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll(
        '.service-item, .about p, .contact form, .contact-info, .hero h1, .hero .slogan, .btn, .section-title'
    );

    elements.forEach(el => {
        observer.observe(el);

        // Check if element is already in view on load
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            el.classList.add('show');
            observer.unobserve(el);
        }
    });
});
