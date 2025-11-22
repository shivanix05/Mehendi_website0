/**
 *  Mishra Mehndi Artist Website
 * Main JavaScript File
 */

 document.addEventListener('DOMContentLoaded', function()
  {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Gallery page functionality (if it exists)
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        // Handle gallery filter buttons if they exist
        const filterButtons = document.querySelectorAll('.gallery-filter button');
        if (filterButtons.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const galleryItems = document.querySelectorAll('.gallery-item');
                    
                    galleryItems.forEach(item => {
                        if (filter === 'all') {
                            item.style.display = 'block';
                        } else if (item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        }
    }
    
    // Contact form validation (if it exists)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let valid = true;
            
            // Get all required fields
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            // Check if required fields are filled
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Validate email if present
            const emailField = contactForm.querySelector('#email');
            if (emailField && emailField.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value.trim())) {
                    valid = false;
                    emailField.classList.add('is-invalid');
                }
            }
            
            // Validate phone number
            const phoneField = contactForm.querySelector('#phone');
            if (phoneField && phoneField.value.trim()) {
                const phoneRegex = /^[0-9+\-\s]{10,15}$/;
                if (!phoneRegex.test(phoneField.value.trim())) {
                    valid = false;
                    phoneField.classList.add('is-invalid');
                }
            }
            
            // If not valid, prevent form submission
            if (!valid) {
                event.preventDefault();
                
                // Scroll to the first invalid field
                const firstInvalidField = contactForm.querySelector('.is-invalid');
                if (firstInvalidField) {
                    firstInvalidField.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    firstInvalidField.focus();
                }
            }
        });
    }
    
    // Testimonial carousel autoplay control
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }
});Shivani