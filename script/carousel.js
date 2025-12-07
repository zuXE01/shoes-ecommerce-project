/**
 * Carousel Module
 * Handles hero carousel functionality
 */

import { SHOES_DB } from '../data/data.js';

/**
 * Initializes carousel with shuffled products
 * Auto-rotates every 5 seconds
 */
export function initCarousel() {
    window.carouselItems = [...SHOES_DB].sort(() => Math.random() - 0.5);
    window.carouselIndex = 0;
    updateCarousel();
    
    setInterval(() => {
        nextCarouselSlide();
    }, 5000);
}

/**
 * Updates carousel display with current product
 * Updates title, price, and indicators
 */
export function updateCarousel() {
    const product = window.carouselItems[window.carouselIndex];
    
    document.getElementById('carousel-image').src = product.image;
    document.getElementById('carousel-image').alt = product.name;
    document.getElementById('carousel-title').textContent = product.name;
    document.getElementById('carousel-price').textContent = `$${product.price.toFixed(2)}`;
    
    const indicatorsContainer = document.getElementById('carousel-indicators');
    indicatorsContainer.innerHTML = '';
    
    window.carouselItems.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `w-2 h-2 rounded-full transition-colors ${
            index === window.carouselIndex ? 'bg-lime-400' : 'bg-gray-400'
        }`;
        indicator.onclick = () => {
            window.carouselIndex = index;
            updateCarousel();
        };
        indicatorsContainer.appendChild(indicator);
    });
}

/**
 * Moves carousel to next slide
 */
export function nextCarouselSlide() {
    window.carouselIndex = (window.carouselIndex + 1) % window.carouselItems.length;
    updateCarousel();
}

/**
 * Moves carousel to previous slide
 */
export function prevCarouselSlide() {
    window.carouselIndex = (window.carouselIndex - 1 + window.carouselItems.length) % window.carouselItems.length;
    updateCarousel();
}
