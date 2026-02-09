// Products page functionality

let allProducts = [...products];
let filteredProducts = [...products];

// Display all products
function displayProducts(productsToShow = allProducts) {
    const container = document.getElementById('products-grid');
    if (!container) return;

    if (productsToShow.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <i class="bi bi-info-circle"></i> No products found matching your search.
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = productsToShow.map(product => `
        <div class="col-md-4 col-lg-3">
            <div class="card product-card shadow-sm h-100 fade-in">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small">${product.description.substring(0, 60)}...</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="rating small">
                            ${generateStars(product.rating)}
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Reattach event listeners
    attachAddToCartListeners();
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            filteredProducts = [...allProducts];
        } else {
            filteredProducts = allProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        displayProducts(filteredProducts);
    });
}

// Sort functionality
function setupSort() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        let sorted = [...filteredProducts];

        switch(sortValue) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                sorted = [...filteredProducts];
        }

        displayProducts(sorted);
    });
}

// Filter by category from URL
function filterByCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        filteredProducts = allProducts.filter(product => 
            product.category === category
        );
        displayProducts(filteredProducts);
    } else {
        displayProducts(allProducts);
    }
}

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
    filterByCategory();
    setupSearch();
    setupSort();
    updateCartCount();
});
