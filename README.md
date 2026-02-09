# Shopiee - E-commerce Website

A modern, responsive e-commerce website built with Bootstrap 5.

## Features

- 🛍️ **Product Catalog** - Browse and search through products
- 🛒 **Shopping Cart** - Add, remove, and update items in cart
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful and intuitive user interface
- ⚡ **Fast Performance** - Lightweight and optimized
- 🔍 **Search & Filter** - Find products quickly
- ⭐ **Product Ratings** - See product ratings and reviews
- 📄 **Product Details** - Detailed product pages with images

## Pages

1. **Homepage** (`index.html`) - Hero section, featured products, categories, and about section
2. **Products** (`products.html`) - Complete product listing with search and sort functionality
3. **Product Detail** (`product-detail.html`) - Individual product details with related products
4. **Shopping Cart** (`cart.html`) - Cart management with quantity controls and order summary

## File Structure

```
ecomerce/
├── index.html              # Homepage
├── products.html           # Products listing page
├── product-detail.html     # Product detail page
├── cart.html              # Shopping cart page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── main.js            # Main JavaScript (product data, featured products)
│   ├── cart.js            # Cart functionality
│   ├── products.js        # Products page functionality
│   ├── product-detail.js  # Product detail page functionality
│   └── cart-page.js       # Cart page functionality
├── assets/
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   └── logo.png
└── README.md
```

## Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Start shopping!** 🛒

No build process or installation required - just open the HTML files in your browser!

## Technologies Used

- **Bootstrap 5.3.0** - CSS framework
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - No frameworks required
- **LocalStorage** - Cart persistence

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features in Detail

### Shopping Cart
- Add products to cart from any page
- Update quantities
- Remove items
- View cart total with shipping and tax calculations
- Free shipping on orders over $50

### Product Features
- Product search functionality
- Sort by price (low to high, high to low)
- Sort by name (A to Z)
- Category filtering
- Product ratings display
- Related products suggestions

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Optimized for tablets and desktops

## Customization

### Adding Products
Edit the `products` array in `js/main.js` to add or modify products:

```javascript
{
    id: 9,
    name: "Product Name",
    price: 29.99,
    image: "./assets/image.jpg",
    category: "electronics",
    description: "Product description",
    rating: 4.5,
    reviews: 100
}
```

### Changing Colors
Modify the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* ... */
}
```

### Modifying Categories
Update the category cards section in `index.html` and add corresponding products in `js/main.js`.

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please contact: info@shopiee.com

---

Made with ❤️ using Bootstrap 5
