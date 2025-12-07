// --- User Database (Local Storage) ---
const DEMO_USERS = {
    'demo@kicks.com': {
        password: 'demo123',
        name: 'Demo User'
    }
};

// Initialize demo user if no users exist
function initializeUsers() {
    let users = localStorage.getItem('kicks_users');
    if (!users) {
        localStorage.setItem('kicks_users', JSON.stringify(DEMO_USERS));
    }
}

// --- Login Handler ---
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    const errorDiv = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('kicks_users') || '{}');
    
    // Validate credentials
    if (users[email] && users[email].password === password) {
        // Successful login
        const userData = {
            email: email,
            name: users[email].name,
            loginTime: new Date().toISOString()
        };
        
        // Store auth token
        localStorage.setItem('kicks_auth', JSON.stringify(userData));
        
        // Store remember me preference
        if (remember) {
            localStorage.setItem('kicks_remember', 'true');
        }
        
        // Redirect to store
        window.location.href = '../index.html';
    } else {
        // Failed login
        errorText.textContent = 'Invalid email or password. Try demo@kicks.com / demo123';
        errorDiv.classList.remove('hidden');
        setTimeout(() => {
            errorDiv.classList.add('hidden');
        }, 5000);
    }
});

// --- Sign Up Handler ---
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const errorDiv = document.getElementById('signup-error');
    const errorText = document.getElementById('signup-error-text');

    // Validation
    if (password !== confirm) {
        errorText.textContent = 'Passwords do not match';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (password.length < 6) {
        errorText.textContent = 'Password must be at least 6 characters';
        errorDiv.classList.remove('hidden');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('kicks_users') || '{}');

    if (users[email]) {
        errorText.textContent = 'This email is already registered';
        errorDiv.classList.remove('hidden');
        return;
    }

    // Create new user
    users[email] = {
        password: password,
        name: name
    };

    // Save to localStorage
    localStorage.setItem('kicks_users', JSON.stringify(users));

    // Auto login
    const userData = {
        email: email,
        name: name,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('kicks_auth', JSON.stringify(userData));

    // Close modal and redirect
    toggleSignUp();
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 500);
});

// --- Toggle Sign Up Modal ---
function toggleSignUp() {
    const modal = document.getElementById('signup-modal');
    modal.classList.toggle('hidden');
    // Clear form on close
    if (modal.classList.contains('hidden')) {
        document.getElementById('signup-form').reset();
        document.getElementById('signup-error').classList.add('hidden');
    }
}

// --- Check if user is already logged in ---
function checkAuth() {
    const auth = localStorage.getItem('kicks_auth');
    if (auth) {
        // User already logged in, redirect to store
        window.location.href = '../index.html';
    }
}

// --- Initialize ---
initializeUsers();
checkAuth();
