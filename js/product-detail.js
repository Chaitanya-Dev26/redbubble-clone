// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.product-main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update main image
            const thumbnailImg = this.querySelector('img');
            mainImage.src = thumbnailImg.src;
        });
    });
    
    // Gallery Navigation
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            const activeThumbnail = document.querySelector('.thumbnail.active');
            const prevThumbnail = activeThumbnail.previousElementSibling || thumbnails[thumbnails.length - 1];
            
            // Trigger click on previous thumbnail
            prevThumbnail.click();
        });
        
        nextButton.addEventListener('click', function() {
            const activeThumbnail = document.querySelector('.thumbnail.active');
            const nextThumbnail = activeThumbnail.nextElementSibling || thumbnails[0];
            
            // Trigger click on next thumbnail
            nextThumbnail.click();
        });
    }
    
    // Favorite Button
    const favoriteButton = document.querySelector('.favorite-button');
    
    if (favoriteButton) {
        favoriteButton.addEventListener('click', function() {
            const path = this.querySelector('path');
            
            if (path.getAttribute('fill') === 'none') {
                // Fill heart
                path.setAttribute('fill', 'var(--rb-red)');
                path.setAttribute('stroke', 'var(--rb-red)');
            } else {
                // Unfill heart
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'currentColor');
            }
        });
    }
    
    // Size Options
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Update selected size
            sizeOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Add to Cart Button
    const addToCartButton = document.querySelector('.add-to-cart-button');
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // Get selected size
            const selectedSize = document.querySelector('.size-option.selected');
            const sizeText = selectedSize ? selectedSize.textContent : 'Medium (16 x 16 in)';
            
            // Show confirmation message
            alert(`Added to cart: holy mackerel... Tote Bag\nSize: ${sizeText}`);
        });
    }
    
    // Returns Info Toggle
    const returnsLink = document.querySelector('.returns-link');
    
    if (returnsLink) {
        returnsLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Our returns are super easy! If you're not completely satisfied with your purchase, we'll make it right.');
        });
    }
    
    // Size Guide Link
    const sizeGuideLink = document.querySelector('.size-guide-link');
    
    if (sizeGuideLink) {
        sizeGuideLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Tote Bag Size Guide:\nSmall: 13 x 13 inches\nMedium: 16 x 16 inches\nLarge: 18 x 18 inches');
        });
    }
    
    // Gift Card Link
    const giftLink = document.querySelector('.gift-link');
    
    if (giftLink) {
        giftLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Digital gift cards are available for immediate delivery!');
        });
    }
});
