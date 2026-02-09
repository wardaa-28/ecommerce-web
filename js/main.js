// Main JavaScript file for Shopiee E-commerce

// Product data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 29.99,
        image: "./assets/4.jpeg",
        category: "electronics",
        description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 39.99,
        image: "./assets/2.jpeg",
        category: "electronics",
        description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone connectivity.",
        rating: 4.8,
        reviews: 256
    },
    {
        id: 3,
        name: "Designer T-Shirt",
        price: 49.99,
        image: "./assets/3.jpeg",
        category: "fashion",
        description: "Comfortable and stylish designer t-shirt made from premium cotton blend.",
        rating: 4.6,
        reviews: 89
    },
    {
        id: 4,
        name: "Modern Home Decor",
        price: 24.99,
        image: "./assets/1.jpeg",
        category: "home",
        description: "Elegant home decor piece that adds style and sophistication to any room.",
        rating: 4.7,
        reviews: 142
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 34.99,
        image: "./assets/4.jpeg",
        category: "electronics",
        description: "Compact wireless earbuds with excellent battery life and crystal-clear audio.",
        rating: 4.4,
        reviews: 203
    },
    {
        id: 6,
        name: "Casual Denim Jacket",
        price: 59.99,
        image: "./assets/2.jpeg",
        category: "fashion",
        description: "Classic denim jacket perfect for any casual occasion. Durable and stylish.",
        rating: 4.5,
        reviews: 167
    },
    {
        id: 7,
        name: "Table Lamp",
        price: 19.99,
        image: "./assets/3.jpeg",
        category: "home",
        description: "Modern table lamp with adjustable brightness and elegant design.",
        rating: 4.3,
        reviews: 94
    },
    {
        id: 8,
        name: "Laptop Stand",
        price: 27.99,
        image: "./assets/1.jpeg",
        category: "electronics",
        description: "Ergonomic laptop stand that improves posture and workspace organization.",
        rating: 4.6,
        reviews: 118
    }
];

// Display featured products on homepage
function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = products.slice(0, 3);
    container.innerHTML = featured.map(product => `
        <div class="col-md-4">
            <div class="card product-card shadow-sm h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description.substring(0, 60)}...</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="rating">
                            ${generateStars(product.rating)}
                            <small class="text-muted">(${product.reviews})</small>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners
    attachAddToCartListeners();
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="bi bi-star"></i>';
    }
    return stars;
}

// Attach add to cart listeners
function attachAddToCartListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    updateCartCount();
});
