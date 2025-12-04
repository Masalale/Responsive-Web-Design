// Portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const sections = document.querySelectorAll('section[id]');
    const brandName = document.querySelector('.brand');
    const navbar = document.querySelector('.navbar');
    const revealItems = document.querySelectorAll('.page-title, .content-grid, .job, .card');
    const portfolioCards = document.querySelectorAll('.card');

    // Section colors
    const sectionColors = ['var(--burgundy)', 'var(--gold)', 'var(--burgundy)', 'var(--gold)', 'var(--burgundy)', 'var(--gold)'];

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll handler for nav and animations
    function handleScroll() {
        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;
        const scrollPos = scrollY + viewHeight / 3;
        const triggerBottom = viewHeight * 0.8;

        // Update active section and reveal elements in one loop
        sections.forEach((section, index) => {
            const { offsetTop, offsetHeight, id } = section;
            
            // Update nav
            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                navbar.setAttribute('data-active-section', id);
                brandName.style.color = sectionColors[index];
                brandName.style.textShadow = id === 'home' ? 'none' : '0 1px 2px rgba(17,16,15,0.2)';
            }
        });

        // Reveal elements
        revealItems.forEach(el => {
            if (el.getBoundingClientRect().top < triggerBottom) el.classList.add('revealed');
        });
    }

    // Touch interactions
    portfolioCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            portfolioCards.forEach(c => c.classList.toggle('touch-hover', c === card));
        }, { passive: true });
    });

    // Throttled scroll
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

    // Init
    handleScroll();
});
