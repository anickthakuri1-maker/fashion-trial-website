// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scrolling for navigation links
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

// Add to cart functionality
const addCartButtons = document.querySelectorAll('.add-cart');
let cartCount = 0;

addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        alert(`Added to cart! Total items: ${cartCount}`);
        this.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
        this.style.color = '#1e3c72';
        this.textContent = 'Added ✓';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            this.style.color = 'white';
            this.textContent = 'Add to Cart';
        }, 2000);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Scroll animation for product cards
const productCards = document.querySelectorAll('.product-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

console.log('✨ Welcome to LUXE Fashion! ✨');