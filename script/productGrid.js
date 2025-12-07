/**
 * Product Grid Module
 * Handles product rendering and display
 */

import { SHOES_DB } from '../data/data.js';

/**
 * Renders product grid based on current category
 * Creates neo-brutalist product cards
 */
export function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    const currentCategory = window.currentCategory || 'All';
    
    productGrid.innerHTML = '';
    
    const filtered = currentCategory === 'All' 
        ? SHOES_DB 
        : SHOES_DB.filter(shoe => shoe.category === currentCategory);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'group relative cursor-pointer';
        
        card.innerHTML = `
            <div class="h-full flex flex-col bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-200">
                <!-- Image Area -->
                <div class="relative h-64 border-b-4 border-black overflow-hidden bg-gray-50">
                    ${product.tag ? `<span class="absolute top-4 left-4 z-10 px-2 py-1 text-xs font-black border-2 border-black ${product.tag === 'SALE' ? 'bg-red-500 text-white' : 'bg-yellow-400 text-black'}">${product.tag}</span>` : ''}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>

                <!-- Content Area -->
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">${product.category}</span>
                    </div>
                    
                    <h3 class="text-2xl font-black uppercase leading-tight mb-4">${product.name}</h3>
                    
                    <div class="mt-auto flex items-center justify-between">
                        <span class="text-2xl font-bold font-mono">$${product.price.toFixed(2)}</span>
                        <button onclick="addToCart(${product.id}); event.stopPropagation();" class="flex items-center gap-2 font-bold border-4 border-black px-4 py-2 bg-lime-400 hover:bg-lime-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none">
                            ADD +
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Click card to open modal
        card.addEventListener('click', () => window.openProductModal(product));
        productGrid.appendChild(card);
    });
}
