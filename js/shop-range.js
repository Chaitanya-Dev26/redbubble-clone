// Banner content data for different product types
const bannerData = {
    apparel: {
        title: "Apparel",
        subtitle: "Refresh your closet with new hoodies, t-shirts, hats, and dresses. Designed with love by artists.",
        buttonText: "Shop All Apparel",
        color: "#3a79b7"
    },
    tshirts: {
        title: "T-Shirts",
        subtitle: "For every weird and wonderful thing you love, there's an artist out there who put it on a t-shirt.",
        buttonText: "Shop T-Shirts",
        color: "#4a90e2"
    },
    hoodies: {
        title: "Hoodies",
        subtitle: "Stay cozy with our stylish and comfortable hoodies",
        buttonText: "Shop Hoodies",
        color: "#5a90e2"
    },
    phonecases: {
        title: "Phone Cases",
        subtitle: "Protect your phone with unique phone cases from independent artists",
        buttonText: "Shop Phone Cases",
        color: "#8a90e2"
    },
    newarrivals: {
        title: "New Arrivals",
        subtitle: "Discover our latest arrivals from independent artists",
        buttonText: "Shop New Arrivals",
        color: "#9a90e2"
    },
    collections: {
        title: "Collections",
        subtitle: "Shop our collections of unique and creative designs",
        buttonText: "Shop Collections",
        color: "#aa90e2"
    },
    deals: {
        title: "Deals",
        subtitle: "Shop our deals and discounts from independent artists",
        buttonText: "Shop Deals",
        color: "#ba90e2"
    }
};

// Function to update banner content
function updateBannerContent(type) {
    const data = bannerData[type] || bannerData.apparel; // Fallback to apparel if type not found
    
    // Update banner elements
    document.querySelector('.clothing-title').textContent = data.title;
    document.querySelector('.clothing-subtitle').textContent = data.subtitle;
    document.querySelector('.clothing-button').innerHTML = `${data.buttonText} <i class="fa-solid fa-arrow-down"></i>`;
    
    // Update banner background color
    document.querySelector('.clothing-banner').style.backgroundColor = data.color;
}

// Get product type from URL parameter
document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('type') || 'apparel'; // Default to apparel if no type specified
    
    // Update banner content
    updateBannerContent(productType);
});
