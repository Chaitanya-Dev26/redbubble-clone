// Authentication and Profile JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const body = document.body;
    const profileIcon = document.getElementById('profile-icon');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileUsername = document.getElementById('profile-username');
    const logoutButton = document.getElementById('logout-button');
    const navLoggedOut = document.querySelector('.navbar-logged-out');
    const navLoggedIn = document.querySelector('.navbar-logged-in');
    const navIcons = document.querySelector('.navbar-icons');
    
    // Function to update login state
    function updateLoginState(isLoggedIn, username = '') {
        if (isLoggedIn) {
            body.classList.add('is-logged-in');
            if (navLoggedOut) navLoggedOut.style.display = 'none';
            if (navLoggedIn) navLoggedIn.style.display = 'flex';
            if (navIcons) navIcons.style.display = 'flex';
            
            if (profileUsername) {
                profileUsername.textContent = username;
            }
        } else {
            body.classList.remove('is-logged-in');
            if (navLoggedOut) navLoggedOut.style.display = 'flex';
            if (navLoggedIn) navLoggedIn.style.display = 'none';
            if (navIcons) navIcons.style.display = 'flex';
        }
    }
    
    // Check initial login state
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username') || '';
    updateLoginState(isLoggedIn, username);
    
    // Toggle profile dropdown
    if (profileIcon) {
        profileIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
            profileIcon.classList.toggle('active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (profileDropdown && profileDropdown.classList.contains('active')) {
            if (!profileDropdown.contains(e.target) && e.target !== profileIcon) {
                profileDropdown.classList.remove('active');
                profileIcon.classList.remove('active');
            }
        }
    });
    
    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear login state
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username')
            
            // Update UI
            updateLoginState(false);
            
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
    
    // Handle login form submission
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get username/email
            const usernameInput = form.querySelector('input[placeholder="Email or Username"]') || 
                                form.querySelector('input[type="email"]') ||
                                form.querySelector('input[type="text"]');
            
            if (usernameInput && usernameInput.value.trim()) {
                // Set login state
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', usernameInput.value.trim());
                
                // Update UI
                updateLoginState(true, usernameInput.value.trim());
                
                // Redirect to home page
                window.location.href = 'index.html';
            }
        });
    });
});
