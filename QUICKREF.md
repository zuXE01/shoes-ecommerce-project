# KICKS_OS Quick Reference

## 🚀 Quick Start

```bash
# 1. Open in browser
open index.html

# 2. Login with demo credentials
Email: demo@kicks.com
Password: demo123

# 3. Browse products and add to cart
```

## 📁 File Map

| File | Purpose |
|------|---------|
| `index.html` | Main store page |
| `login.html` | Login/signup page |
| `data/data.js` | Product database |
| `script/script.js` | App entry point |
| `script/auth.js` | User authentication |
| `script/carousel.js` | Hero carousel |
| `script/productGrid.js` | Product display |
| `script/cart.js` | Shopping cart |
| `script/modal.js` | Product modal |
| `script/login.js` | Login logic |
| `script/utils.js` | Helper functions |
| `style/style.css` | Custom styles |

## 🔑 Key Functions

### Global State (window object)
```javascript
window.cart              // Shopping cart items
window.currentUser       // Logged in user
window.currentCategory   // Active product filter
window.selectedProduct   // Selected product in modal
window.selectedSize      // Selected size
window.selectedColor     // Selected color
```

### Auth Functions
```javascript
checkUserAuth()          // Check login status
logout()                 // Logout user
```

### Carousel Functions
```javascript
initCarousel()           // Start carousel
nextCarouselSlide()      // Next slide
prevCarouselSlide()      // Previous slide
```

### Product Functions
```javascript
renderProducts()         // Render product grid
```

### Cart Functions
```javascript
addToCart(id)            // Add product by ID
removeFromCart(index)    // Remove item
renderCart()             // Update cart display
openCart()               // Show cart drawer
closeCart()              // Hide cart drawer
checkout()               // Process order
```

### Modal Functions
```javascript
openProductModal(product)    // Open product detail
closeProductModal()          // Close modal
addToCartFromModal()         // Add with options
```

## 🎨 Color Palette

```css
Primary:    #a3e635 (lime-400)
Dark:       #000000 (black)
Light:      #ffffff (white)
Accent 1:   #fbbf24 (yellow-400)
Accent 2:   #60a5fa (blue-400)
Accent 3:   #f472b6 (pink-300)
Alert:      #ef4444 (red-500)
Success:    #22c55e (green-400)
```

## 📱 Responsive Breakpoints

```
Mobile:   < 640px   (sm)
Tablet:   640-1024px (md, lg)
Desktop:  > 1024px  (xl)
```

## 🔄 Data Flow

```
1. User logs in
   └─> Stored in localStorage (kicks_auth)

2. Browse products
   └─> From SHOES_DB in data/data.js

3. Click product
   └─> Opens modal with details

4. Select size/color
   └─> Stored in window.selectedSize/Color

5. Add to cart
   └─> Added to window.cart array

6. Checkout
   └─> Order saved to localStorage (kicks_orders)
   └─> Cart cleared
```

## 🧪 Testing Quick Links

- Full Testing: See [TESTING.md](./TESTING.md)
- Dev Guidelines: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- Deploy Info: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔧 Common Customizations

### Change Demo Password
File: `script/login.js`
```javascript
const DEMO_USERS = {
    'demo@kicks.com': {
        password: 'newpassword',  // ← Change here
        name: 'Demo User'
    }
};
```

### Add New Product
File: `data/data.js`
```javascript
{
    id: 7,
    name: "NEW SHOE",
    price: 199.99,
    category: "Running",
    tag: "NEW DROP",
    image: "https://images.unsplash.com/..."
}
```

### Change Carousel Rotation Speed
File: `script/carousel.js`
```javascript
setInterval(() => {
    nextCarouselSlide();
}, 5000);  // ← Change to different milliseconds
```

### Modify Colors
File: `style/style.css` or HTML Tailwind classes
```html
<!-- Change color class -->
<button class="bg-lime-400">Button</button>  <!-- Current -->
<button class="bg-blue-400">Button</button>  <!-- Change to this -->
```

## 🐛 Debug Commands

Open browser console and try:
```javascript
// Check current user
console.log(window.currentUser);

// Check cart items
console.log(window.cart);

// Check localStorage
console.log(localStorage);

// Clear localStorage
localStorage.clear();

// Force logout
window.logout();

// Check active category
console.log(window.currentCategory);
```

## 📊 LocalStorage Keys

```javascript
kicks_auth        // Current user session
kicks_users       // User database
kicks_orders      // Order history
kicks_remember    // Remember me preference
```

## ⚡ Performance Tips

- Minimize DOM queries (cached in script.js)
- Use event delegation for dynamic elements
- Keep modules focused and small
- Cache product queries on SHOES_DB
- Avoid repeated renderCart calls

## 🔒 Security Notes

⚠️ **This is a demo application**

Current implementation:
- Demo auth only (localStorage)
- No server-side validation
- Public demo credentials
- No payment processing

For production:
- Implement backend auth
- Hash passwords securely
- Validate all inputs server-side
- Use HTTPS/TLS
- Implement proper payment gateway

## 📈 Metrics to Monitor

- Page load time
- Module load time
- Cart operations speed
- Modal open/close time
- Memory usage
- Network requests

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Modules not loading | Check HTTPS/secure context, verify imports |
| Cart not saving | Check localStorage enabled |
| Images not showing | Check Unsplash URLs and CORS |
| Modal not opening | Check browser console for errors |
| Carousel not auto-rotating | Check setInterval timing |

---

**Last Updated:** December 7, 2025
**Version:** 1.0 (Production Ready)
