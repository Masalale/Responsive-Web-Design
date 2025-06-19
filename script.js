// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Implement smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Implement active section highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100; // Add offset for better UX

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Add class to nav bar to indicate active section
                document.querySelector('.nav-bar').setAttribute('data-active-section', sectionId);

                // Instead of changing text, just update the styling
                updateNavbarStyle(sectionId);
            }
        });
    }

    function updateNavbarStyle(sectionId) {
        const navName = document.querySelector('.nav-name');

        // Create a smooth transition between text colors based on active section
        switch (sectionId) {
            case 'home':
                navName.style.color = 'var(--burgundy)';
                navName.style.textShadow = 'none';
                break;
            case 'about':
                navName.style.color = 'var(--gold)';
                navName.style.textShadow = '0 1px 2px rgba(17, 16, 15, 0.2)';
                break;
            case 'experience':
                navName.style.color = 'var(--burgundy)';
                navName.style.textShadow = '0 1px 2px rgba(17, 16, 15, 0.2)';
                break;
            case 'projects':
                navName.style.color = 'var(--gold)';
                navName.style.textShadow = '0 1px 2px rgba(17, 16, 15, 0.2)';
                break;
            case 'contact':
                navName.style.color = 'var(--burgundy)';
                navName.style.textShadow = '0 1px 2px rgba(17, 16, 15, 0.2)';
                break;
            default:
                navName.style.color = 'var(--burgundy)';
                navName.style.textShadow = 'none';
        }
    }

    // Listen for scroll events to highlight active section
    window.addEventListener('scroll', highlightActiveSection);

    // Initial call to set active section on page load
    highlightActiveSection();

    // 3. Add scroll reveal animations for sections
    const revealElements = document.querySelectorAll('.section-title, .about-content, .experience-item, .project-card');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check on page load

    // 4. Mobile optimization - add touch support for project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            // Remove hover state from all other cards
            projectCards.forEach(c => {
                if (c !== card) c.classList.remove('touch-hover');
            });

            // Toggle hover state on current card
            card.classList.toggle('touch-hover');
        });
    });
});
