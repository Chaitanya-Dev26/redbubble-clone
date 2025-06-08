// Gallery functionality
let currentImageIndex = 0;

// Function to update gallery images
function updateGalleryImages(product) {
    const mainImage = document.querySelector('.product-main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.src = product.images[currentImageIndex];
        mainImage.alt = product.title;
    }
    
    // Update thumbnails
    thumbnails.forEach((thumbnail, index) => {
        const img = thumbnail.querySelector('img');
        if (img) {
            img.src = product.images[index];
            img.alt = `${product.title} thumbnail ${index + 1}`;
            
            // Add active class to current thumbnail
            if (index === currentImageIndex) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        }
    });
}

// Function to handle gallery navigation
function handleGalleryNavigation(direction) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        const product = getProductById(parseInt(productId));
        if (product && product.images) {
            currentImageIndex = (currentImageIndex + direction + product.images.length) % product.images.length;
            updateGalleryImages(product);
        }
    }
}

// Add event listeners for gallery navigation
document.addEventListener('DOMContentLoaded', function() {
    // Store the product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Initialize gallery with first image
    if (productId) {
        const product = getProductById(parseInt(productId));
        if (product && product.images) {
            currentImageIndex = 0;
            updateGalleryImages(product);
        }
    }

    // Add click handlers for navigation buttons
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            handleGalleryNavigation(-1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            handleGalleryNavigation(1);
        });
    }

    // Add click handlers for thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentImageIndex = index;
            if (productId) {
                const product = getProductById(parseInt(productId));
                if (product && product.images) {
                    updateGalleryImages(product);
                }
            }
        });
    });
});

// Product data
const products = [
    {
        //--Featured Products Ids---
        id: 1,
        title: "Holy Mackerel Print",
        artist: "Will Bullas Studio",
        price: 22.94,
        images: [
            "assets/images/product_detail_images/holy_mackerel-1.webp",
            "assets/images/product_detail_images/holy_mackerel-2.webp"
        ],
        description: "Totes deluxe. Sturdy and stylish with a vivid double-sided print",
        sizes: ["Small (13 x 13 in)", "Medium (16 x 16 in)", "Large (18 x 18 in)"],
        rating: 4.82,
        reviews: 222
    },
    {
        id: 2,
        title: "Mondrian Style Laptop Sleeve",
        artist: "PlanetCatArt",
        price: 44.92,
        images: [
            "assets/images/product_detail_images/mondrian-laptop-1.jpg",
            "assets/images/product_detail_images/mondrian-laptop-2.jpg"
        ],
        description: "Stylish laptop sleeve with vibrant Mondrian design",
        sizes: ["13-inch", "15-inch"],
        rating: 4.75,
        reviews: 156
    },
    {
        id: 3,
        title: "Hangry Fitted T-Shirt",
        artist: "chestify",
        price: 39.77,
        images: [
            "assets/images/product_detail_images/hangry-fitted-1.jpg",
            "assets/images/product_detail_images/hangry-fitted-2.jpg"
        ],
        description: "Soft and comfortable fitted t-shirt with unique design",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 312
    },
    {
        id: 4,
        title: "Save Your Soul Tote Bag",
        artist: "sachpica",
        price: 22.94,
        images: [
            "assets/images/product_detail_images/save-your-soul-1.jpg",
            "assets/images/product_detail_images/save-your-soul-2.jpg"
        ],
        description: "Stylish tote bag with a meaningful message",
        sizes: ["Small (13 x 13 in)", "Medium (16 x 16 in)", "Large (18 x 18 in)"],
        rating: 4.6,
        reviews: 185
    },
    {
        id: 5,
        title: "Ramona Spiral Notebook",
        artist: "ppmid",
        price: 13.46,
        images: [
            "assets/images/product_detail_images/ramona-spiral-1.jpg",
            "assets/images/product_detail_images/ramona-spiral-2.jpg"
        ],
        description: "Stylish spiral notebook with Ramona design",
        sizes: ["Standard"],
        rating: 4.5,
        reviews: 120
    },
    {
        id: 6,
        title: "Unpuzzled Sticker",
        artist: "HenriqueTorres",
        price: 2.51,
        images: [
            "assets/images/product_detail_images/unpuzzled-sticker-1.jpg",
            "assets/images/product_detail_images/unpuzzled-sticker-2.jpg"
        ],
        description: "Unique and creative sticker design",
        sizes: ["Standard"],
        rating: 4.7,
        reviews: 85
    },
    {
        id: 7,
        title: "Multicolor Pattern Scarf",
        artist: "JohnBealDesign",
        price: 36.34,
        images: [
            "assets/images/product_detail_images/multicolor-scarf-1.jpg",
            "assets/images/product_detail_images/multicolor-scarf-2.jpg"
        ],
        description: "A vibrant multicolor scarf perfect for all seasons.",
        sizes: ["One Size"],
        rating: 4.7,
        reviews: 120
    },
    {
        id: 8,
        title: "Strawberry Zipper Pouch",
        artist: "lighthouse-art",
        price: 24.85,
        images: [
            "assets/images/product_detail_images/strawberry-pouch-1.jpg",
            "assets/images/product_detail_images/strawberry-pouch-2.jpg"
        ],
        description: "A cute zipper pouch with a strawberry pattern, ideal for carrying essentials.",
        sizes: ["13-inch", "15-inch"],
        rating: 4.6,
        reviews: 95
    },
    {
        id: 9,
        title: "Comic Farmed Art Print",
        artist: "misticalplace",
        price: 56.03,
        images: [
            "assets/images/product_detail_images/comic-art-1.jpg",
            "assets/images/product_detail_images/comic-art-2.jpg"
        ],
        description: "A framed art print featuring a comic-style illustration, perfect for decor.",
        sizes: ["A4", "A3", "A2"],
        rating: 4.9,
        reviews: 75
    },
    {
        id: 10,
        title: "Nipo Sticker",
        artist: "EmceeFrodis",
        price: 23.07,
        images: [
            "assets/images/product_detail_images/nipo-sticker-1.jpg",
            "assets/images/product_detail_images/nipo-sticker-2.jpg"
        ],
        description: "A quirky and fun 'Nipo' themed sticker, great for laptops and notebooks.",
        sizes: ["3x3 in", "4x4 in", "6x6 in"],
        rating: 4.8,
        reviews: 60
    }
    ,
                            //---SHOP FAN ART---
    //star treak ids
    {
        id: 11,
        title: "Enterprise Classic Graphic T-Shirt",
        artist: "JohnBealDesign",
        price: 36.34,
        images: [
            "assets/images/product_detail_images/star-wars-poster-1.jpg",
            "assets/images/product_detail_images/star-wars-poster-2.jpg"
        ],
        description: "A beautiful poster featuring a Star Wars design, perfect for any fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 140
    },
    {
        id: 12,
        title: "Trek Spaceship in Space - The Great Wave Classic T-Shirt",
        artist: "luciddreams",
        price: 27.14,
        images: [
            "assets/images/product_detail_images/beam-me-up-t-shirt-1.jpg",
            "assets/images/product_detail_images/beam-me-up-t-shirt-2.jpg"
        ],
        description: "A Star Trek themed t-shirt with the famous phrase 'Beam me up, Scotty'.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 80
    },
    {
        id: 13,
        title: "Space the final frontier Essential T-Shirt",
        artist: "LiRoVi",
        price: 26.15,
        images: [
            "assets/images/product_detail_images/space-station-print-1.jpg",
            "assets/images/product_detail_images/space-station-print-2.jpg"
        ],
        description: "A beautiful print featuring a space station in orbit, perfect for any space enthusiast.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 120
    },
    {
        id: 14,
        title: "USS Enterprise Star Trek Classic T-Shirt",
        artist: "lighthouse-art",
        price: 29.23,
        images: [
            "assets/images/product_detail_images/star-wars-logo-hoodie-1.jpg",
            "assets/images/product_detail_images/star-wars-logo-hoodie-2.jpg"
        ],
        description: "A cozy hoodie featuring the Star Wars logo, perfect for any fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 100
    },
    {
        id: 15,
        title: "Beam Me Up, Scotty Essential T-Shirt",
        artist: "lighthouse-art",
        price: 27.14,
        images: [
            "assets/images/product_detail_images/c3po-sticker-1.jpg",
            "assets/images/product_detail_images/c3po-sticker-2.jpg"
        ],
        description: "A quirky sticker featuring C3-PO, perfect for laptops and notebooks.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 60
    }
    ,
    //schitt's Creek ids
    {
        id: 16,
        title: "Im sorry I didnt respond to like one text, David! Sticker",
        artist: "tiyashabhan",
        price: 2.78,
        images: [
            "assets/images/product_detail_images/captain-america-poster-1.jpg",
            "assets/images/product_detail_images/captain-america-poster-2.jpg"
        ],
        description: "A poster featuring Captain America's shield, perfect for any Marvel fan.",
        sizes: ["Glossy", "Matte", "Transparent", "Holygraphic"],
        rating: 4.72,
        reviews: 2291
    },
    {
        id: 17,
        title: "Schitts Creek Nom Nom Alexis Classic T-Shirt",
        artist: "Emily tong",
        price: 25.06,
        images: [
            "assets/images/product_detail_images/batman-phone-case-1.jpg",
            "assets/images/product_detail_images/batman-phone-case-2.jpg"
        ],
        description: "A Batman logo phone case, perfect for any DC fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 18,
        title: "Schitts Creek - Well, this town is very screamnastic - shitts",
        artist: "CyberYogi",
        price: 2.78,
        images: [
            "assets/images/product_detail_images/the-flash-t-shirt-1.jpg",
            "assets/images/product_detail_images/the-flash-t-shirt-2.jpg"
        ],
        description: "A t-shirt featuring the Flash logo, perfect for any DC fan.",
        sizes: ["Glossy", "Matte", "Transparent", "Holygraphic"],
        rating: 4.72,
        reviews: 2291
    },

    //pan am ids
    {
        id: 21,
        title: "Pan Am | Pan American Airways | Tail Fin Greeting Card",
        artist: "darryldesign",
        price: 15.13,
        images: [
            "assets/images/product_detail_images/spiderman-phone-case-1.jpg",
            "assets/images/product_detail_images/spiderman-phone-case-2.jpg"
        ],
        description: "A Spiderman logo phone case, perfect for any Marvel fan.",
        sizes: ["Ruled line", "Graph"],
        rating: 4.83,
        reviews: 179
    },
    {
        id: 22,
        title: "Pan Am Pan American World Airways Classic T-Shirt",
        artist: "fomodesigns",
        price: 26.10,
        images: [
            "assets/images/product_detail_images/iron-man-mug-1.jpg",
            "assets/images/product_detail_images/iron-man-mug-2.jpg"
        ],
        description: "A mug featuring the Iron Man logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 23,
        title: "Pan American World Airways Pan Am Classic T-Shirt",
        artist: "fomodesigns",
        price: 26.10,
        images: [
            "assets/images/product_detail_images/thor-t-shirt-1.jpg",
            "assets/images/product_detail_images/thor-t-shirt-2.jpg"
        ],
        description: "A t-shirt featuring the Thor logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 24,
        title: "Pan American World Airways Boeing 707-320 Jet Age Tail (Left Facing) Coffee Mug",
        artist: "aspinworks",
        price: 19.03,
        images: [
            "assets/images/product_detail_images/captain-marvel-hoodie-1.jpg",
            "assets/images/product_detail_images/captain-marvel-hoodie-2.jpg"
        ],
        description: "A mug featuring the Boeing 707-320 Jet Age Tail (Left Facing), perfect for any Pan Am fan.",
        sizes: ["Classic Mug", " Tall Mug"],
        rating: 4.8,
        reviews: 381
    },
    {
        id: 25,
        title: "Caribbean Retro Vintage Travel Poster Poster",
        artist: "vintagevivian",
        price: 21.44,
        images: [
            "assets/images/product_detail_images/caribbean-retro-vintage-travel-poster-1.jpg",
            "assets/images/product_detail_images/caribbean-retro-vintage-travel-poster-2.jpg"
        ],
        description: "A poster featuring the Caribbean Retro Vintage Travel Poster, perfect for any travel fan.",
        sizes: ["Extra small (11.2 x 16.5 in", "Small (15.8 x 23.4 in)", "Medium (22.4 x 33.1 in)", "Large (31.6 x 46.8 in)"],
        rating: 4.56,
        reviews: 691
    },

    //Dune ids
    {
        id: 26,
        title: "Dune Universe Planets Glitch Logo Classic T-Shirt",
        artist: "FifthSun",
        price: 30.28,
        images: [
            "assets/images/product_detail_images/black-widow-phone-case-1.jpg",
            "assets/images/product_detail_images/black-widow-phone-case-2.jpg"
        ],
        description: "A Black Widow logo phone case, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 27,
        title: "Dune House Atreides Emblem Classic T-Shirt",
        artist: "FifthSun",
        price: 30.28,
        images: [
            "assets/images/product_detail_images/the-avengers-t-shirt-1.jpg",
            "assets/images/product_detail_images/the-avengers-t-shirt-2.jpg"
        ],
        description: "A t-shirt featuring the Avengers logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 28,
        title: "Dune House Atreides Distressed Badge Classic T-Shirt",
        artist: "FifthSun",
        price: 29.65,
        images: [
            "assets/images/product_detail_images/ant-man-hoodie-1.jpg",
            "assets/images/product_detail_images/ant-man-hoodie-2.jpg"
        ],
        description: "A hoodie featuring the Ant-Man logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 29,
        title: "Dune Fear Is The Mind Killer Lightweight Hoodie",
        artist: "FifthSun",
        price: 29.65,
        images: [
            "assets/images/product_detail_images/doctor-strange-mug-1.jpg",
            "assets/images/product_detail_images/doctor-strange-mug-2.jpg"
        ],
        description: "A mug featuring the Doctor Strange logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },
    {
        id: 30,
        title: "Dune Rule Yourself First Quote Classic T-Shirt",
        artist: "FifthSun",
        price: 29.23,
        images: [
            "assets/images/product_detail_images/guardians-of-galaxy-phone-case-1.jpg",
            "assets/images/product_detail_images/guardians-of-galaxy-phone-case-2.jpg"
        ],
        description: "A Guardians of the Galaxy logo phone case, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.69,
        reviews: 2011
    },

    //Assassins Creed ids
    {
        id: 31,
        title: "Assassin's Creed Cryptic Symbol Essential T-Shirt",
        artist: "Nerd Out!",
        price: 25.06,
        images: [
            "assets/images/product_detail_images/spider-woman-t-shirt-1.jpg",
            "assets/images/product_detail_images/spider-woman-t-shirt-2.jpg"
        ],
        description: "A t-shirt featuring the Spider-Woman logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.68,
        reviews: 1373
    },
    {
        id: 32,
        title: "Assassins Creed Pattern Sticker",
        artist: "Fave101",
        price: 3.25,
        images: [
            "assets/images/product_detail_images/deadpool-hoodie-1.jpg",
            "assets/images/product_detail_images/deadpool-hoodie-2.jpg"
        ],
        description: "A hoodie featuring the Deadpool logo, perfect for any Marvel fan.",
        sizes: ["Small (3.8 x 1.5 in)", "Medium (5.5 x 2.2 in)", "Large (7.2 x 2.9 in)", "Extra Large (9 x 3.6 in)"],
        rating: 4.72,
        reviews: 2291
    }
    ,
    {
        id: 33,
        title: "Assassin's creed Sticker",
        artist: "urban-warriors",
        price: 2.55,
        images: [
            "assets/images/product_detail_images/iron-man-t-shirt-1.jpg",
            "assets/images/product_detail_images/iron-man-t-shirt-2.jpg"
        ],
        description: "A t-shirt featuring the Iron Man logo, perfect for any Marvel fan.",
        sizes: ["Small (3.8 x 1.5 in)", "Medium (5.5 x 2.2 in)", "Large (7.2 x 2.9 in)", "Extra Large (9 x 3.6 in)"],
        rating: 4.72,
        reviews: 2291
    },
    {
        id: 34,
        title: "Eagle Bearer Warrior Essential T-Shirt",
        artist: "LiHypertwenty DesignsRoVi",
        price: 22.94,
        images: [
            "assets/images/product_detail_images/captain-america-mug-1.jpg",
            "assets/images/product_detail_images/captain-america-mug-2.jpg"
        ],
        description: "A mug featuring the Captain America logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.68,
        reviews: 1373
    },
    {
        id: 35,
        title: "Assassin's Creed - Stained Glass Series - 2 Graphic T-Shirt",
        artist: "HiddenRetro",
        price: 34.82,
        images: [
            "assets/images/product_detail_images/thor-hoodie-1.jpg",
            "assets/images/product_detail_images/thor-hoodie-2.jpg"
        ],
        description: "A hoodie featuring the Thor logo, perfect for any Marvel fan.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.67,
        reviews: 187
    }

    
];

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to update product detail page
function updateProductDetail(product) {
    // Update title
    document.querySelector('.product-title').textContent = product.title;
    
    // Update artist info
    const creatorLink = document.querySelector('.creator-link');
    const creatorAvatar = document.querySelector('.creator-avatar');
    if (creatorLink && creatorAvatar) {
        creatorLink.textContent = product.artist;
        creatorAvatar.alt = product.artist;
        creatorAvatar.src = 'assets/images/logo-icon.png';
    }
    
    // Update price
    const currentPrice = document.querySelector('.current-price');
    const discountPrice = document.querySelector('.discount-price');
    if (currentPrice && discountPrice) {
        currentPrice.textContent = `$${product.price}`;
        discountPrice.textContent = `$${product.price} when you buy any 2+`;
    }
    
    // Update product image
    const mainImage = document.querySelector('.product-main-image img');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.title;
    }
    
    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail img');
    thumbnails.forEach((img, index) => {
        img.src = product.image;
        img.alt = `${product.title} thumbnail ${index + 1}`;
    });
    
    // Update product description
    const featuresList = document.querySelector('.features-list');
    if (featuresList) {
        featuresList.innerHTML = `
            <li>${product.description}</li>
            <li>Available in ${product.sizes.join(', ')}</li>
        `;
    }
    
    // Update rating
    const ratingScore = document.querySelector('.rating-score');
    if (ratingScore) {
        ratingScore.textContent = `${product.rating} (${product.reviews} reviews)`;
    }
    
    // Update size options
    const sizeOptions = document.querySelector('.size-options');
    if (sizeOptions) {
        sizeOptions.innerHTML = product.sizes.map(size => 
            `<button class="size-option">${size}</button>`
        ).join('');
    }
}

// Initialize product detail page
// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to update product detail page
function initializeProductDetail() {
    console.log('Initializing product detail page');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log('Product ID from URL:', productId);
    
    if (productId) {
        const product = getProductById(parseInt(productId));
        console.log('Found product:', product);
        if (product) {
            updateProductDetail(product);
        }
    }
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    initializeProductDetail();
});

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to update product detail page
function updateProductDetail(product) {
    // Update title
    document.querySelector('.product-title').textContent = product.title;
    
    // Update artist info
    document.querySelector('.creator-link').textContent = product.artist;
    
    // Update price
    document.querySelector('.current-price').textContent = `$${product.price}`;
    
    // Update product image
    const images = document.querySelectorAll('.product-main-image img, .thumbnail img');
    images.forEach(img => {
        img.src = product.image;
        img.alt = product.title;
    });
    
    // Update product description
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = `
        <li>${product.description}</li>
        <li>Available in ${product.sizes.join(', ')}</li>
    `;
    
    // Update rating
    document.querySelector('.rating-score').textContent = `${product.rating} (${product.reviews} reviews)`;
    
    // Update size options
    const sizeOptions = document.querySelector('.size-options');
    sizeOptions.innerHTML = product.sizes.map(size => 
        `<button class="size-option">${size}</button>`
    ).join('');
}

// Add event listener to featured product links
document.addEventListener('DOMContentLoaded', function() {
    const featuredProducts = document.querySelectorAll('.featured-product');
    featuredProducts.forEach(product => {
        const link = product.querySelector('.featured-product-link');
        const productId = product.dataset.productId;
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });
});

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to update product detail page
function updateProductDetail(product) {
    // Update title
    document.querySelector('.product-title').textContent = product.title + ' Tote Bag';
    
    // Update artist info
    document.querySelector('.creator-link').textContent = product.artist;
    
    // Update price
    document.querySelector('.current-price').textContent = `$${product.price}`;
    
    // Update product image
    document.querySelectorAll('.product-main-image img, .thumbnail img').forEach(img => {
        img.src = product.image;
        img.alt = product.title;
    });
    
    // Update product description
    document.querySelector('.features-list').innerHTML = `
        <li>${product.description}</li>
        <li>Available in multiple sizes</li>
    `;
    
    // Update rating
    document.querySelector('.rating-score').textContent = `${product.rating} (${product.reviews} reviews)`;
    
    // Update size options
    const sizeOptions = document.querySelector('.size-options');
    sizeOptions.innerHTML = product.sizes.map(size => 
        `<button class="size-option">${size}</button>`
    ).join('');
}

// Add event listener to featured product links
const featuredProducts = document.querySelectorAll('.featured-product-link');
featuredProducts.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const productId = this.closest('.featured-product').dataset.productId;
        const product = getProductById(productId);
        if (product) {
            updateProductDetail(product);
            // Add your routing logic here to navigate to product-detail.html
        }
    });
});
