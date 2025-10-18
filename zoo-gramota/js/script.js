// Simple interactivity for demonstration
document.addEventListener('DOMContentLoaded', function() {
    // Card click animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.backgroundColor = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // Age group tabs functionality
    const ageGroups = document.querySelectorAll('.age-group');
    const articleContainers = document.querySelectorAll('.articles-container');
    
    ageGroups.forEach(group => {
        group.addEventListener('click', function() {
            // Remove active class from all groups
            ageGroups.forEach(g => g.classList.remove('active'));
            // Add active class to clicked group
            this.classList.add('active');
            
            // Hide all article containers
            articleContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show the target container
            const targetId = this.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Add any resize-specific logic here
}, 250));