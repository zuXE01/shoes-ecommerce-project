/**
 * Authentication Module
 * Handles user login/logout and auth state
 */

/**
 * Checks if user is logged in via localStorage
 * Shows/hides appropriate navbar elements
 */
export function checkUserAuth() {
    const auth = localStorage.getItem('kicks_auth');
    const userSection = document.getElementById('user-section');
    const loginBtn = document.getElementById('login-btn');
    const userName = document.getElementById('user-name');
    
    if (auth) {
        window.currentUser = JSON.parse(auth);
        userSection.classList.remove('hidden');
        loginBtn.classList.add('hidden');
        userName.textContent = window.currentUser.name;
        return true;
    } else {
        userSection.classList.add('hidden');
        loginBtn.classList.remove('hidden');
        window.currentUser = null;
        return false;
    }
}

/**
 * Gets the current authenticated user
 */
export function getCurrentUser() {
    return window.currentUser;
}

/**
 * Logs out current user and redirects to login page
 */
export function logout() {
    localStorage.removeItem('kicks_auth');
    localStorage.removeItem('kicks_remember');
    window.currentUser = null;
    window.cart = [];
    window.location.href = 'login.html';
}
