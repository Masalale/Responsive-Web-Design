// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // SMOOTH SCROLLING FOR INTERNAL LINKS
    // =================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =================================================================
    // NAVIGATION & ACTIVE SECTION HIGHLIGHTING
    // =================================================================
    const sections = document.querySelectorAll('section[id]');
    const navName = document.querySelector('.nav-name');
    const navBar = document.querySelector('.nav-bar');

    const sectionColors = {
        'home': 'var(--burgundy)',
        'about': 'var(--gold)',
        'experience': 'var(--burgundy)',
        'projects': 'var(--gold)',
        'contact': 'var(--burgundy)'
    };

    function updateActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navBar.setAttribute('data-active-section', sectionId);
                navName.style.color = sectionColors[sectionId] || 'var(--burgundy)';
                navName.style.textShadow = sectionId === 'home' ? 'none' : '0 1px 2px rgba(17, 16, 15, 0.2)';
            }
        });
    }

    // =================================================================
    // SCROLL REVEAL ANIMATIONS
    // =================================================================
    const revealElements = document.querySelectorAll('.section-title, .about-content, .experience-item, .project-card');

    function handleScrollReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        revealElements.forEach(element => {
            if (element.getBoundingClientRect().top < triggerBottom) {
                element.classList.add('revealed');
            }
        });
    }

    // =================================================================
    // MOBILE TOUCH INTERACTIONS
    // =================================================================
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            projectCards.forEach(c => {
                if (c !== card) c.classList.remove('touch-hover');
            });
            card.classList.toggle('touch-hover');
        });
    });

    // =================================================================
    // OPTIMIZED SCROLL EVENT HANDLING
    // =================================================================
    let scrollTimeout;

    function handleScroll() {
        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            updateActiveSection();
            handleScrollReveal();
        }, 16); // ~60fps
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize on load
    updateActiveSection();
    handleScrollReveal();
});
