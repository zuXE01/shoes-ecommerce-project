/**
 * Product Modal Module
 * Handles product detail modal functionality
 */

import { renderCart, openCart } from './cart.js';

/**
 * Opens product detail modal with product information
 */
export function openProductModal(product) {
    window.selectedProduct = product;
    window.selectedSize = null;
    window.selectedColor = 'Black';
    
    // Update modal content
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
    
    // Reset size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('bg-black', 'text-white');
        btn.classList.add('bg-white');
    });
    
    // Reset color selection
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('bg-black', 'text-white', 'bg-gray-400');
        btn.classList.add('bg-white');
        if (btn.dataset.color === 'Black') {
            btn.classList.add('bg-black', 'text-white');
        }
    });
    
    // Show tag if exists
    const tagSection = document.getElementById('modal-tag-section');
    if (product.tag) {
        const tagClass = product.tag === 'SALE' ? 'bg-red-500' : 'bg-yellow-400';
        const textClass = product.tag === 'SALE' ? 'text-white' : 'text-black';
        tagSection.innerHTML = `
            <div class="border-4 border-black p-4 ${tagClass} ${textClass} text-center">
                <span class="font-black text-lg uppercase">${product.tag}</span>
            </div>
        `;
    } else {
        tagSection.innerHTML = '';
    }
    
    // Show modal
    document.getElementById('product-modal-overlay').classList.remove('hidden');
}

/**
 * Closes product detail modal
 */
export function closeProductModal() {
    document.getElementById('product-modal-overlay').classList.add('hidden');
    window.selectedProduct = null;
    window.selectedSize = null;
}

/**
 * Adds product to cart from modal with selected size and color
 */
export function addToCartFromModal() {
    if (!window.selectedProduct) return;
    
    if (!window.selectedSize) {
        alert('Please select a size!');
        return;
    }
    
    const cartItem = {
        ...window.selectedProduct,
        size: window.selectedSize,
        color: window.selectedColor,
        cartId: Date.now()
    };
    
    window.cart.push(cartItem);
    renderCart();
    closeProductModal();
    openCart();
}

/**
 * Sets up event listeners for modal interactions
 */
export function setupModalListeners() {
    // Product Modal - Size Selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('bg-black', 'text-white');
                b.classList.add('bg-white');
            });
            e.target.classList.remove('bg-white');
            e.target.classList.add('bg-black', 'text-white');
            window.selectedSize = e.target.dataset.size;
        });
    });
    
    // Product Modal - Color Selection
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.color-btn').forEach(b => {
                b.classList.remove('bg-black', 'text-white', 'bg-gray-400');
                b.classList.add('bg-white');
            });
            
            const color = e.target.dataset.color;
            window.selectedColor = color;
            
            if (color === 'Black') {
                e.target.classList.add('bg-black', 'text-white');
            } else if (color === 'Gray') {
                e.target.classList.add('bg-gray-400', 'text-white');
            }
            e.target.classList.remove('bg-white');
        });
    });
    
    // Product Modal - Close on overlay click
    document.getElementById('product-modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'product-modal-overlay') {
            closeProductModal();
        }
    });
}
