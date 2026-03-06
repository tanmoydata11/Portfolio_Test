/* ============================================================
   main.js — Tanmoy Ghatak Portfolio
   Sections:
   1. Smooth Scroll
   2. Active Nav Link on Scroll
   ============================================================ */

/* ----------------------------------------------------------
   1. Smooth Scroll
   Intercepts clicks on anchor links (#section) and scrolls
   smoothly instead of jumping.
   ---------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ----------------------------------------------------------
   2. Active Nav Link on Scroll
   Adds the "active" class to whichever nav link corresponds
   to the section currently visible in the viewport.
   ---------------------------------------------------------- */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
