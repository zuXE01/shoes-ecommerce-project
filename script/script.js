/**
 * ============================================
 * KICKS_OS - Main Application Script
 * ============================================
 * Handles: Carousel, Products, Cart, Auth
 */

import { SHOES_DB } from '../data/data.js';
import { 
    checkUserAuth, 
    logout 
} from './auth.js';
import { 
    initCarousel, 
    nextCarouselSlide, 
    prevCarouselSlide 
} from './carousel.js';
import { 
    renderProducts 
} from './productGrid.js';
import { 
    renderCart, 
    addToCart, 
    removeFromCart, 
    openCart, 
    closeCart, 
    checkout 
} from './cart.js';
import { 
    openProductModal, 
    closeProductModal, 
    addToCartFromModal, 
    setupModalListeners 
} from './modal.js';
import {
    requireAuth
} from './utils.js';

// ============================================
// STATE MANAGEMENT (Global window state for modules)
// ============================================
window.cart = [];
window.currentCategory = 'All';
window.currentUser = null;
window.carouselIndex = 0;
window.carouselItems = [];
window.selectedProduct = null;
window.selectedSize = null;
window.selectedColor = 'Black';

// ============================================
// DOM ELEMENTS
// ============================================
const productGrid = document.getElementById('product-grid');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const cartOverlay = document.getElementById('cart-overlay');
const categoryButtons = document.querySelectorAll('.category-btn');
const userSection = document.getElementById('user-section');
const loginBtn = document.getElementById('login-btn');
const userName = document.getElementById('user-name');

// Store references in window for module access
window.productGrid = productGrid;
window.cartDrawer = cartDrawer;
window.cartItemsContainer = cartItemsContainer;
window.cartCountElement = cartCountElement;
window.cartTotalElement = cartTotalElement;
window.cartOverlay = cartOverlay;
window.userSection = userSection;
window.loginBtn = loginBtn;
window.userName = userName;

// ============================================
// APPLICATION INITIALIZATION
// ============================================

/**
 * Main app initialization
 * Runs on page load
 */
function init() {
    checkUserAuth();
    
    // Restore cart from sessionStorage if user just logged in after checkout
    const pendingCart = sessionStorage.getItem('cart_pending_checkout');
    if (pendingCart && window.currentUser) {
        window.cart = JSON.parse(pendingCart);
        sessionStorage.removeItem('cart_pending_checkout');
        renderCart();
        openCart();
    }
    
    initCarousel();
    renderProducts();
    setupEventListeners();
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Sets up all event listeners for the app
 */
function setupEventListeners() {
    // Carousel Controls
    document.getElementById('carousel-prev').addEventListener('click', prevCarouselSlide);
    document.getElementById('carousel-next').addEventListener('click', nextCarouselSlide);

    // Category Filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => {
                b.classList.remove('bg-black', 'text-white', 'shadow-[4px_4px_0px_0px_rgba(163,230,53,1)]');
                b.classList.add('bg-white');
            });
            e.target.classList.remove('bg-white');
            e.target.classList.add('bg-black', 'text-white', 'shadow-[4px_4px_0px_0px_rgba(163,230,53,1)]');

            window.currentCategory = e.target.innerText;
            if(window.currentCategory === 'ALL') window.currentCategory = 'All';
            
            renderProducts();
        });
    });

    // Cart Toggles
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Setup modal listeners
    setupModalListeners();
}

// ============================================
// EXPOSE FUNCTIONS TO WINDOW
// ============================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCartFromModal = addToCartFromModal;
window.logout = logout;

// ============================================
// START APPLICATION
// ============================================
init();