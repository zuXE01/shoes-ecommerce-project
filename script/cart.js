/**
 * Cart Module
 * Handles shopping cart functionality
 */

import { SHOES_DB } from '../data/data.js';

/**
 * Renders cart items and updates total
 * Shows empty state if cart is empty
 */
export function renderCart() {
    const cart = window.cart || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="text-center opacity-50 font-bold mt-10">CART IS EMPTY</div>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-50 mb-4';
            itemEl.innerHTML = `
                <img src="${item.image}" class="w-16 h-16 object-cover border-2 border-black" alt="${item.name}">
                <div class="flex-1">
                    <h4 class="font-black uppercase text-sm">${item.name}</h4>
                    <div class="text-xs font-bold text-gray-600 mt-1">
                        ${item.size ? `Size: ${item.size} | ` : ''}${item.color ? `Color: ${item.color}` : ''}
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <span class="font-mono font-bold">$${item.price.toFixed(2)}</span>
                        <button onclick="removeFromCart(${index})" class="text-xs font-bold text-red-500 hover:underline">REMOVE</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCountElement.innerText = cart.length;
    cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

/**
 * Adds product to cart by ID
 */
export function addToCart(id) {
    const product = SHOES_DB.find(p => p.id === id);
    if (product) {
        window.cart.push(product);
        renderCart();
        openCart();
    }
}

/**
 * Removes item from cart by index
 */
export function removeFromCart(index) {
    window.cart.splice(index, 1);
    renderCart();
}

/**
 * Opens cart drawer
 */
export function openCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    cartDrawer.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
}

/**
 * Closes cart drawer
 */
export function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    cartDrawer.classList.add('hidden');
    cartOverlay.classList.add('hidden');
}

/**
 * Processes checkout
 * Requires authentication - redirects to login if not logged in
 * Saves order to localStorage and clears cart
 */
export function checkout() {
    const cart = window.cart || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Check if user is authenticated
    if (!window.currentUser) {
        // Save cart to session storage before redirecting
        sessionStorage.setItem('cart_pending_checkout', JSON.stringify(cart));
        alert('Please log in to complete your purchase');
        window.location.href = 'login.html';
        return;
    }
    
    const currentUser = window.currentUser;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const order = {
        orderId: 'ORD-' + Date.now(),
        customer: currentUser.name,
        email: currentUser.email,
        items: cart,
        total: total,
        date: new Date().toISOString()
    };
    
    let orders = JSON.parse(localStorage.getItem('kicks_orders') || '[]');
    orders.push(order);
    localStorage.setItem('kicks_orders', JSON.stringify(orders));
    
    alert(`✅ Order Confirmed!\n\nOrder ID: ${order.orderId}\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    
    window.cart = [];
    renderCart();
    closeCart();
}
