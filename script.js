// Optimized Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const sections = document.querySelectorAll('section[id]');
    const navName = document.querySelector('.nav-name');
    const navBar = document.querySelector('.nav-bar');
    const revealElements = document.querySelectorAll('.section-title, .about-content, .experience-item, .project-card');
    const projectCards = document.querySelectorAll('.project-card');

    // Section colors mapping
    const sectionColors = ['var(--burgundy)', 'var(--gold)', 'var(--burgundy)', 'var(--gold)', 'var(--burgundy)'];

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Combined scroll handler for navigation and reveals
    function handleScroll() {
        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;
        const scrollPos = scrollY + viewHeight / 3;
        const triggerBottom = viewHeight * 0.8;

        // Update active section and reveal elements in one loop
        sections.forEach((section, index) => {
            const { offsetTop, offsetHeight, id } = section;
            
            // Navigation update
            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                navBar.setAttribute('data-active-section', id);
                navName.style.color = sectionColors[index];
                navName.style.textShadow = id === 'home' ? 'none' : '0 1px 2px rgba(17,16,15,0.2)';
            }
        });

        // Reveal animations
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < triggerBottom) el.classList.add('revealed');
        });
    }

    // Mobile touch interactions
    projectCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            projectCards.forEach(c => c.classList.toggle('touch-hover', c === card));
        }, { passive: true });
    });

    // Throttled scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initialize
    handleScroll();
});
