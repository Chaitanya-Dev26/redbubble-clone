// // Redbubble Clone - Main JavaScript

// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile Menu Toggle
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const navbarLinks = document.querySelector('.navbar-links');
//     const navbarSearch = document.querySelector('.navbar-search');
    
//     if (mobileMenuToggle) {
//         mobileMenuToggle.addEventListener('click', function() {
//             navbarLinks.classList.toggle('active');
//             navbarSearch.classList.toggle('active');
            
//             // Animate menu bars to form an X
//             const menuBars = this.querySelectorAll('.menu-bar');
//             menuBars.forEach(bar => bar.classList.toggle('active'));
//         });
//     }
    
//     // Featured Products Slider
//     const sliderPrev = document.querySelector('.slider-prev');
//     const sliderNext = document.querySelector('.slider-next');
//     const featuredProductsGrid = document.querySelector('.featured-products-grid');
//     let currentSlide = 0;
    
//     // Calculate how many products to show based on screen width
//     function getProductsPerView() {
//         if (window.innerWidth >= 1200) return 5;
//         if (window.innerWidth >= 992) return 4;
//         if (window.innerWidth >= 768) return 3;
//         return 2;
//     }
    
//     function updateSlider() {
//         const productsPerView = getProductsPerView();
//         const featuredProducts = document.querySelectorAll('.featured-product');
//         const totalSlides = Math.ceil(featuredProducts.length / productsPerView);
        
//         // Ensure currentSlide is within bounds
//         if (currentSlide < 0) currentSlide = 0;
//         if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
        
//         // Show/hide products based on current slide
//         featuredProducts.forEach((product, index) => {
//             const startIndex = currentSlide * productsPerView;
//             const endIndex = startIndex + productsPerView;
            
//             if (index >= startIndex && index < endIndex) {
//                 product.style.display = 'block';
//             } else {
//                 product.style.display = 'none';
//             }
//         });
//     }
    
//     if (sliderPrev && sliderNext) {
//         sliderPrev.addEventListener('click', function() {
//             currentSlide--;
//             updateSlider();
//         });
        
//         sliderNext.addEventListener('click', function() {
//             currentSlide++;
//             updateSlider();
//         });
        
//         // Initialize slider
//         updateSlider();
        
//         // Update slider on window resize
//         window.addEventListener('resize', updateSlider);
//     }
    
//     // Fan Art Tabs
//     const tabButtons = document.querySelectorAll('.tab-button');
    
//     tabButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remove active class from all buttons
//             tabButtons.forEach(btn => btn.classList.remove('active'));
            
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             // In a real implementation, this would load different products
//             // For this clone, we'll just show a message
//             console.log(`Tab clicked: ${this.textContent}`);
//         });
//     });
    
//     // Heart buttons for favorites
//     const heartButtons = document.querySelectorAll('.heart-button');
    
//     heartButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Toggle filled/unfilled heart
//             const path = this.querySelector('path');
//             if (path.getAttribute('fill') === 'none') {
//                 path.setAttribute('fill', 'var(--rb-red)');
//                 path.setAttribute('stroke', 'var(--rb-red)');
//             } else {
//                 path.setAttribute('fill', 'none');
//                 path.setAttribute('stroke', 'currentColor');
//             }
//         });
//     });
    
//     // Promotional Overlay
//     const promoOverlay = document.getElementById('promoOverlay');
//     const promoOverlayClose = document.querySelector('.promo-overlay-close');
    
//     if (promoOverlay && promoOverlayClose) {
//         // Show promo overlay after a delay
//         setTimeout(function() {
//             promoOverlay.classList.add('active');
//         }, 3000);
        
//         // Close promo overlay when clicked
//         promoOverlayClose.addEventListener('click', function() {
//             promoOverlay.classList.remove('active');
//         });
//     }
    
//     // Add hover effects for product cards
//     const productCards = document.querySelectorAll('.product-card');
    
//     productCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-5px)';
//             this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//             this.style.boxShadow = 'none';
//         });
//     });
    
//     // Add hover effects for featured products, design cards, and fan art products
//     const hoverItems = document.querySelectorAll('.featured-product, .design-card, .fan-art-product, .artist-card');
    
//     hoverItems.forEach(item => {
//         item.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-5px)';
//             this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
//         });
        
//         item.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//             this.style.boxShadow = 'none';
//         });
//     });
    
//     // Add active state for search input
//     const searchInput = document.querySelector('.search-input');
    
//     if (searchInput) {
//         searchInput.addEventListener('focus', function() {
//             this.parentElement.classList.add('active');
//         });
        
//         searchInput.addEventListener('blur', function() {
//             this.parentElement.classList.remove('active');
//         });
//     }
    
//     // Create placeholder images for product cards
//     function createPlaceholderImages() {
//         // Create placeholder for hero banner background
//         const heroBanner = document.querySelector('.hero-banner');
//         if (heroBanner) {
//             const heroBg = document.createElement('div');
//             heroBg.classList.add('hero-bg');
//             heroBanner.appendChild(heroBg);
//         }
        
//         // Create placeholders for product cards
//         const productCardPlaceholders = document.querySelectorAll('.product-card-placeholder');
//         productCardPlaceholders.forEach((placeholder, index) => {
//             const shimmer = document.createElement('div');
//             shimmer.classList.add('shimmer');
//             placeholder.appendChild(shimmer);
//         });
//     }
    
//     createPlaceholderImages();
    
//     // Handle "View Cart" buttons
//     const viewCartButtons = document.querySelectorAll('.view-cart');
    
//     viewCartButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             alert('Cart functionality would be implemented here in a real application.');
//         });
//     });
    
//     // Add sticky behavior to header on scroll
//     const header = document.querySelector('.header');
//     let lastScrollTop = 0;
    
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         if (scrollTop > lastScrollTop && scrollTop > 100) {
//             // Scrolling down & past threshold
//             header.classList.add('header-hidden');
//         } else {
//             // Scrolling up or at top
//             header.classList.remove('header-hidden');
//         }
        
//         lastScrollTop = scrollTop;
//     });
    
//     // Add CSS class for styling mobile menu toggle animation
//     document.head.insertAdjacentHTML('beforeend', `
//         <style>
//             .menu-bar.active:nth-child(1) {
//                 transform: translateY(8px) rotate(45deg);
//             }
//             .menu-bar.active:nth-child(2) {
//                 opacity: 0;
//             }
//             .menu-bar.active:nth-child(3) {
//                 transform: translateY(-8px) rotate(-45deg);
//             }
//             .header-hidden {
//                 transform: translateY(-100%);
//             }
//             .header {
//                 transition: transform 0.3s ease;
//             }
//             .search-form.active {
//                 border-color: var(--rb-red);
//             }
//         </style>
//     `);
// });
