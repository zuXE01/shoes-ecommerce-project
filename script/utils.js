/**
 * Utilities Module
 * Helper functions and constants
 */

/**
 * Validates if user is authenticated
 * Redirects to login if not
 */
export function requireAuth() {
    if (!window.currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * Shows a notification toast
 */
export function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 border-4 border-black z-50 max-w-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
    
    // Set styling based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-400', 'text-black');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-400', 'text-black');
            break;
        default:
            notification.classList.add('bg-blue-400', 'text-black');
    }
    
    notification.innerHTML = `
        <p class="font-bold">${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/**
 * Formats currency value
 */
export function formatCurrency(value) {
    return `$${parseFloat(value).toFixed(2)}`;
}

/**
 * Formats date to readable string
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Gets total cart price
 */
export function getTotalCartPrice() {
    return (window.cart || []).reduce((sum, item) => sum + item.price, 0);
}

/**
 * Clears all data from localStorage (except auth)
 */
export function clearAppData() {
    window.cart = [];
    window.currentCategory = 'All';
    window.selectedProduct = null;
    window.selectedSize = null;
    window.selectedColor = 'Black';
}
