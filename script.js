// mobile nav toggle

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.querySelector('i').className = open ? 'bx bx-x' : 'bx bx-menu';
});

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.querySelector('i').className = 'bx bx-menu';
    });
});

// header border once scrolled

const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// highlight the nav link for the section in view

const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('section[id]').forEach(sec => sectionObserver.observe(sec));

// fade sections in as they scroll into view

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
