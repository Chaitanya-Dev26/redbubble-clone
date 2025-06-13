// Redbubble Clone - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarSearch = document.querySelector('.navbar-search');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
            navbarSearch.classList.toggle('active');
            
            // Animate menu bars to form an X
            const menuBars = this.querySelectorAll('.menu-bar');
            menuBars.forEach(bar => bar.classList.toggle('active'));
        });
    }
    
    // Featured Products Slider
    const sliderPrev = document.querySelector('.slider-prev');
    const sliderNext = document.querySelector('.slider-next');
    const featuredProductsGrid = document.querySelector('.featured-products-grid');
    let currentSlide = 0;
    
    // Calculate how many products to show based on screen width
    function getProductsPerView() {
        if (window.innerWidth >= 1200) return 5;
        if (window.innerWidth >= 992) return 4;
        if (window.innerWidth >= 768) return 3;
        return 2;
    }
    
    function updateSlider() {
        const productsPerView = getProductsPerView();
        const featuredProducts = document.querySelectorAll('.featured-product');
        const totalSlides = Math.ceil(featuredProducts.length / productsPerView);
        
        // Ensure currentSlide is within bounds
        if (currentSlide < 0) currentSlide = 0;
        if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
        
        // Show/hide products based on current slide
        featuredProducts.forEach((product, index) => {
            const startIndex = currentSlide * productsPerView;
            const endIndex = startIndex + productsPerView;
            
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    if (sliderPrev && sliderNext) {
        sliderPrev.addEventListener('click', function() {
            currentSlide--;
            updateSlider();
        });
        
        sliderNext.addEventListener('click', function() {
            currentSlide++;
            updateSlider();
        });
        
        // Initialize slider
        updateSlider();
        
        // Update slider on window resize
        window.addEventListener('resize', updateSlider);
    }
    
    // Fan Art Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const fanArtProducts = document.querySelector('.fan-art-products');
    
    // Initialize first tab
    const activeTab = document.querySelector('.tab-button.active');
    if (activeTab) {
        updateFanArtProducts(activeTab.textContent);
    }
    
    // Add click handlers for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update fan art products based on category
            updateFanArtProducts(this.textContent);
        });
    });
    
    // Function to update fan art products based on category
    function updateFanArtProducts(category) {
        // Get products for the selected category
        const products = getProductsByCategory(category);
        
        // Add fade-out animation class to existing products
        fanArtProducts.classList.add('fade-out');
        
        // Wait for fade-out animation to complete
        setTimeout(() => {
            // Clear existing products
            fanArtProducts.innerHTML = '';
            fanArtProducts.classList.remove('fade-out');
            
            // Add new products with fade-in animation
            products.forEach(product => {
                const productHtml = `
                    <div class="fan-art-product fade-in">
                        <a href="product-detail.html?id=${product.id}" class="fan-art-product-link" data-product-id="${product.id}">
                            <div class="fan-art-product-image product-card-placeholder">
                                <button class="heart-button" aria-label="Add to favorites">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 class="fan-art-product-title">${product.title}</h3>
                            <p class="fan-art-product-artist">by ${product.artist}</p>
                            <p class="fan-art-product-price">$${product.price}</p>
                        </a>
                    </div>
                `;
                fanArtProducts.innerHTML += productHtml;
            });
        }, 200); // Wait for 300ms for fade-out animation
    }
    
    // Function to get products by category
    function getProductsByCategory(category) {
        // For now, we'll return different products based on category
        // In a real application, this would be based on product metadata
        switch(category) {
            case 'Star Trek':
                return [
                    {
                        id: 11,
                        title: "Enterprise Classic Graphic T-Shirt",
                        artist: "JohnBealDesign",
                        price: 36.69
                    },
                    {
                        id: 12,
                        title: "Trek Spaceship in Space - The Great Wave Classic T-Shirt",
                        artist: "luciddreams",
                        price: 27.14
                    },
                    {
                        id: 13,
                        title: "Space the final frontier Essential T-Shirt",
                        artist: "LiRoVi",
                        price: 26.15
                    },
                    {
                        id: 14,
                        title: "USS Enterprise Star Trek Classic T-Shirt",
                        artist: "lighthouse-art",
                        price: 24.85
                    },
                    {
                        id: 15,
                        title: "Beam Me Up, Scotty Essential T-Shirt",
                        artist: "lighthouse-art",
                        price: 27.14
                    }
                ];
            case 'Schitt\'s Creek':
                return [
                    {
                        id: 16,
                        title: "Im sorry I didnt respond to like one text, David! Sticker",
                        artist: " tiyashabhan",
                        price: 1.69
                    },
                    {
                        id: 17,
                        title: "Schitts Creek Nom Nom Alexis Classic T-Shirt",
                        artist: "Emily tong",
                        price: 21.30
                    },
                    {
                        id: 18,
                        title: "Schitts Creek - Well, this town is very screamnastic - shitts",
                        artist: "CyberYogi",
                        price: 1.67
                    },
                ];
            case 'Pan Am':
                return [
                    {
                        id: 21,
                        title: "Pan Am | Pan American Airways | Tail Fin Greeting Card",
                        artist: "darryldesign",
                        price: 12.87
                    },
                    {
                        id: 22,
                        title: "Pan Am Pan American World Airways Classic T-Shirt",
                        artist: "fomodesigns",
                        price: 26.10
                    },
                    {
                        id: 23,
                        title: "Pan American World Airways Pan Am Classic T-Shirt",
                        artist: "fomodesigns",
                        price: 22.19
                    },
                    {
                        id: 24,
                        title: "Pan American World Airways Boeing 707-320 Jet Age Tail (Left Facing) Coffee Mug",
                        artist: "aspinworks",
                        price: 15.22
                    },
                    {
                        id: 25,
                        title: "Caribbean Retro Vintage Travel Poster Poster",
                        artist: "vintagevivian",
                        price: 21.44
                    }
                ];
            case 'Dune':
                return [
                    {
                        id: 26,
                        title: "Dune Universe Planets Glitch Logo Classic T-Shirt",
                        artist: "FifthSun",
                        price: 25.74
                    },
                    {
                        id: 27,
                        title: "Dune Universe Planets Emblem Classic T-Shirt",
                        artist: "FifthSun",
                        price: 25.74
                    },
                    {
                        id: 28,
                        title: "Dune House Atreides Distressed Badge Classic T-Shirt",
                        artist: "FifthSun",
                        price: 25.20
                    },
                    {
                        id: 29,
                        title: "Dune Fear Is The Mind Killer Lightweight Hoodie",
                        artist: "FifthSun",
                        price: 64.01
                    },
                    {
                        id: 30,
                        title: "Dune Rule Yourself First Quote Classic T-Shirt",
                        artist: "FifthSun",
                        price: 24.85
                    }
                ];
            case 'Assassin\'s Creed':
                return [
                    {
                        id: 31,
                        title: "Assassin's Creed Cryptic Symbol Essential T-Shirt",
                        artist: "Nerd Out!",
                        price: 21.30
                    },
                    {
                        id: 32,
                        title: "Assassin's Creed Pattern Sticker",
                        artist: "Fave101",
                        price: 1.95
                    },
                    {
                        id: 33,
                        title: "Assassin's creed Sticker",
                        artist: "urban-warriors",
                        price: 1.53
                    },
                    {
                        id: 34,
                        title: "Eagle Bearer Warrior Essential T-Shirt",
                        artist: "Hypertwenty Designs",
                        price: 24.85
                    },
                    {
                        id: 35,
                        title: "Assassin's Creed - Stained Glass Series - 2 Graphic T-Shirt",
                        artist: "HiddenRetro",
                        price: 34.82
                    }
                ];
            default:
                return [];
        }
    }
    

    // Heart buttons for favorites
    const heartButtons = document.querySelectorAll('.heart-button');
    
    heartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle filled/unfilled heart
            const path = this.querySelector('path');
            if (path.getAttribute('fill') === 'none') {
                path.setAttribute('fill', 'var(--rb-red)');
                path.setAttribute('stroke', 'var(--rb-red)');
            } else {
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'currentColor');
            }
        });
    });
    
    // Promotional Overlay
    const promoOverlay = document.getElementById('promoOverlay');
    const promoOverlayClose = document.querySelector('.promo-overlay-close');
    
    if (promoOverlay && promoOverlayClose) {
        // Show promo overlay after a delay
        setTimeout(function() {
            promoOverlay.classList.add('active');
        }, 3000);
        
        // Close promo overlay when clicked
        promoOverlayClose.addEventListener('click', function() {
            promoOverlay.classList.remove('active');
        });
    }
    
    // Add active state for search input
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('active');
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('active');
        });
    }
    
    // Create placeholder images for product cards
    function createPlaceholderImages() {
        // Create placeholder for hero banner background
        const heroBanner = document.querySelector('.hero-banner');
        if (heroBanner) {
            const heroBg = document.createElement('div');
            heroBg.classList.add('hero-bg');
            heroBanner.appendChild(heroBg);
        }
        
        // Create placeholders for product cards
        const productCardPlaceholders = document.querySelectorAll('.product-card-placeholder');
        productCardPlaceholders.forEach((placeholder, index) => {
            const shimmer = document.createElement('div');
            shimmer.classList.add('shimmer');
            placeholder.appendChild(shimmer);
        });
    }
    
    createPlaceholderImages();
    
    // Handle "View Cart" buttons
    const viewCartButtons = document.querySelectorAll('.view-cart');
    
    viewCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cart functionality would be implemented here in a real application.');
        });
    });
    
    // Add sticky behavior to header on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past threshold
            header.classList.add('header-hidden');
        } else {
            // Scrolling up or at top
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add CSS class for styling mobile menu toggle animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .menu-bar.active:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            .menu-bar.active:nth-child(2) {
                opacity: 0;
            }
            .menu-bar.active:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
            .header-hidden {
                transform: translateY(-100%);
            }
            .header {
                transition: transform 0.3s ease;
            }
            .search-form.active {
                border-color: var(--rb-red);
            }
        </style>
    `);
});