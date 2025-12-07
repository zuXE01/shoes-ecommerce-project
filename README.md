# KICKS_OS - Neo-Brutalist Shoe E-Commerce Store

A modern, bold e-commerce platform for sneaker enthusiasts built with vanilla JavaScript (ES6 modules), Tailwind CSS, and a neo-brutalist design aesthetic.

## 📁 Project Structure

```
shoes-ecommerce-project/
├── index.html              # Main store page
├── login.html              # Login & signup page
├── README.md               # Project documentation
├── TESTING.md              # Testing checklist
├── DEPLOYMENT.md           # Deployment guide
├── data/
│   └── data.js            # Product database (ES6 export)
├── script/
│   ├── script.js          # Main app entry point & state management
│   ├── auth.js            # Authentication module
│   ├── carousel.js        # Hero carousel module
│   ├── productGrid.js     # Product grid rendering module
│   ├── cart.js            # Shopping cart module
│   ├── modal.js           # Product detail modal module
│   ├── login.js           # Login page authentication
│   ├── utils.js           # Utility functions
│   └── README.md          # Module documentation
└── style/
    └── style.css          # Custom animations & styles
```

## 🎨 Design Features

- **Neo-Brutalist Aesthetic**: Bold borders (4px), strong typography, high contrast
- **Color Scheme**: Black, white, lime-400 (primary accent), with secondary colors for UI elements
- **Responsive Grid**: Bento-grid hero section with carousel (1 column mobile, 4x2 desktop)
- **Custom Animations**: Marquee, cart slide-in, carousel transitions, hover effects
- **Tailwind CSS**: Full Tailwind integration for rapid development
- **Lucide Icons**: Clean, minimal icon library
- **Background Images**: Hero blocks feature high-quality unsplash images with overlays

## 🔧 Architecture

### ES6 Module System
The application uses ES6 modules (`import`/`export`) for clean code organization:
- **data/data.js**: Exports `SHOES_DB` product array
- **script/script.js**: Main entry point, imports all modules and initializes app
- **script/\*.js**: Feature modules that export specific functions
- **Backward Compatibility**: Functions exposed to `window` object for onclick handlers in HTML

### State Management
Global state stored in `script.js`:
- `cart`: Shopping cart items array
- `currentCategory`: Active product filter
- `currentUser`: Authenticated user object
- `carouselIndex`: Current carousel slide
- `selectedProduct`, `selectedSize`, `selectedColor`: Modal state

### Module Dependencies
```
script.js (entry)
├── auth.js (authentication)
├── carousel.js (carousel logic)
├── productGrid.js → modal.js (product display)
├── cart.js (shopping cart)
└── modal.js (product details)

data/data.js (product database)
```

## 🔑 Key Features

### 🛒 Shopping
- **Product Carousel**: Randomly shuffled hero carousel (auto-rotates every 5 seconds) with manual controls
- **Product Grid**: Responsive 3-column layout with hover effects and clickable cards
- **Category Filtering**: Filter by All, Running, Casual, High-Top, Classic
- **Shopping Cart**: Slide-in drawer with add/remove functionality, displays size/color info
- **Product Tags**: NEW DROP, BEST SELLER, LIMITED, SALE tags
- **Product Detail Modal**: Click any product to view:
  - Full product image
  - Category, price, and stock status
  - Size selection (sizes 6-13)
  - Color selection (Black, White, Gray)
  - Product description and special tags
  - Add to cart with selected options

### 🔐 Authentication
- **Login System**: Email/password based authentication
- **User Registration**: Create new accounts with validation
- **Session Management**: Persistent login with localStorage
- **Demo Account**: 
  - Email: `demo@kicks.com`
  - Password: `demo123`

### 💳 Checkout
- **Cart Management**: Add/remove items, view total
- **Checkout Processing**: Generates order ID and saves orders
- **Order Confirmation**: Shows order details with timestamp

### 🎯 Additional Features
- **Hero Bento Grid**: 4x2 responsive grid with multiple showcase blocks:
  - **Product Carousel**: Auto-rotating featured products
  - **Trending Block**: With background image showcasing trending items
  - **Flash Sale Block**: Special discount highlight with background
  - **VIP Club Block**: Premium membership promotion with background
- **Marquee Banner**: Scrolling promotional text
- **Footer**: Complete with:
  - Quick links
  - Customer support
  - Contact information
  - Social media links (Facebook, Instagram, TikTok, Twitter)
  - Legal links (Privacy, Terms, Cookies)

## 📦 File Descriptions

### index.html
Main store page with:
- Navigation bar with user/cart controls
- Marquee promotional banner
- Hero carousel section with responsive bento grid
- Trending, Flash Sale, and VIP Club blocks with background images
- Product grid with filterable categories
- Product detail modal (overlay with size/color selection)
- Cart drawer with slide-in animation
- Footer with social media links and contact info

**Imports**: `style/style.css` and `script/script.js` (ES6 module)

### login.html
Authentication page featuring:
- Login form with email/password
- "Remember me" checkbox
- Sign up modal
- Demo credentials display
- Responsive card design

**Imports**: `style/style.css` and `script/login.js`

### data/data.js
Product database with 6 shoes (ES6 export):
```javascript
export const SHOES_DB = [
  {
    id,
    name,
    price,
    category,
    tag,        // Optional: NEW DROP, BEST SELLER, LIMITED, SALE
    image       // Unsplash URL
  }
]
```

### script/script.js
Main application entry point (~130 lines):
- **Imports**: All modules (auth, carousel, productGrid, cart, modal) and data
- **State Management**: Exports cart, currentCategory, currentUser, carousel state, modal state
- **DOM Elements**: Cached references to all major elements
- **Initialization**: `init()` function that sets up the app on page load
- **Event Listeners**: Central setup for all user interactions
- **Window Exports**: Exposes functions to window for backward compatibility

### script/auth.js
Authentication module (~45 lines):
- `checkUserAuth()`: Verify login status and update UI
- `getCurrentUser()`: Get current authenticated user
- `logout()`: Clear auth and redirect to login

### script/carousel.js
Hero carousel module (~60 lines):
- `initCarousel()`: Initialize with shuffled products, auto-rotate every 5 seconds
- `updateCarousel()`: Update display with current product
- `nextCarouselSlide()`: Navigate to next slide
- `prevCarouselSlide()`: Navigate to previous slide

### script/productGrid.js
Product grid rendering module (~55 lines):
- `renderProducts()`: Render products based on current category filter
- Creates neo-brutalist cards with images, names, prices, and add-to-cart buttons
- Adds click handlers to cards for opening product modal

### script/cart.js
Shopping cart module (~100 lines):
- `renderCart()`: Display cart items with size/color info and totals
- `addToCart(id)`: Add product to cart by ID
- `removeFromCart(index)`: Remove item from cart by index
- `openCart()`: Show cart drawer
- `closeCart()`: Hide cart drawer
- `checkout()`: Process order, save to localStorage, confirm with user

### script/modal.js
Product detail modal module (~110 lines):
- `openProductModal(product)`: Open modal with product details
- `closeProductModal()`: Close modal and reset selections
- `addToCartFromModal()`: Add item with selected size/color to cart
- `setupModalListeners()`: Setup size/color selection and modal controls

### script/login.js
Login page authentication (~150 lines):
- User database management in localStorage
- Login validation with email/password
- Sign up with validation (password match, minimum length, no duplicates)
- Auto-login after successful sign up
- Demo user initialization

### style/style.css
Custom CSS (~50 lines):
- Animations: `marquee` (scrolling text), `slideIn` (cart entrance)
- Selection colors (lime-400)
- Custom scrollbar styling with neo-brutalist borders

## 🚀 How to Run

1. Open `index.html` in a web browser
2. You'll be redirected to `login.html`
3. Login with:
   - **Email**: `demo@kicks.com`
   - **Password**: `demo123`
4. OR create a new account via signup
5. Browse products, add to cart, and checkout!

## 📚 Documentation

- **[QUICKREF.md](./QUICKREF.md)** - Quick reference guide for functions and data flow
- **[TESTING.md](./TESTING.md)** - Complete testing checklist and procedures
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide for production environments
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Development guidelines and how to add features

## 🔄 Data Flow

```
Login Page
    ↓
Authenticate (localStorage)
    ↓
Main Store Page
    ├─ Load Products from SHOES_DB
    ├─ Initialize Carousel
    └─ Display Cart
        ↓
    Add to Cart → Render Cart → Checkout → Save Order
```

## 💾 LocalStorage Structure

### `kicks_auth`
```json
{
  "email": "user@example.com",
  "name": "User Name",
  "loginTime": "2024-12-07T10:30:00Z"
}
```

### `kicks_users`
```json
{
  "email@example.com": {
    "password": "hashedPassword",
    "name": "User Name"
  }
}
```

### `kicks_orders`
```json
[
  {
    "orderId": "ORD-1733594400000",
    "customer": "John Doe",
    "email": "john@example.com",
    "items": [...],
    "total": 299.50,
    "date": "2024-12-07T10:30:00Z"
  }
]
```

## 🎨 Color Palette

| Color | Usage |
|-------|-------|
| Black | Primary text, borders, buttons |
| White | Background, cards |
| Lime-400 (#a3e635) | Primary accent, hover states |
| Yellow-400 | Marquee, tags |
| Blue-400 | Secondary blocks, buttons |
| Pink-300 | Flash sale highlight |
| Red-500 | SALE tags, remove buttons |

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet**: 2-column product grid
- **Desktop**: 3-column product grid + full bento hero

## 🔗 External Dependencies

- **Tailwind CSS**: CDN (https://cdn.tailwindcss.com)
- **Lucide Icons**: CDN (https://unpkg.com/lucide@latest)

## 📝 Adding Products

Add new products to `data.js`:
```javascript
{
  id: 7,
  name: "PRODUCT NAME",
  price: 199.99,
  category: "Running|Casual|High-Top|Classic",
  tag: "NEW DROP|BEST SELLER|LIMITED|SALE|null",
  image: "https://unsplash-image-url"
}
```

## 🔐 Security Notes

⚠️ **Demo Project**: This uses localStorage for simplicity. In production:
- Never store passwords in localStorage (use secure backends)
- Implement proper hashing and authentication
- Use HTTPS for all transmissions
- Add CSRF protection

## 🎯 Future Enhancements

- [ ] Product quantity selector in modal
- [ ] Wishlist functionality
- [ ] Product reviews/ratings
- [ ] Search functionality by product name
- [ ] Backend API integration
- [ ] Payment gateway (Stripe, PayPal)
- [ ] Admin dashboard for product management
- [ ] Email notifications for orders
- [ ] User profile and order history
- [ ] Advanced filtering (price range, ratings, etc.)

## 📄 License

Free to use and modify for personal/educational purposes.

---

**Built with** ❤️ **using vanilla JavaScript**
