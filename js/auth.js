// Authentication Pages JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Toggle between signup options
    const signupOptions = document.querySelectorAll('.signup-option');
    
    if (signupOptions.length > 0) {
        signupOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                signupOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
            });
        });
    }
    
    // Form validation
    const authForms = document.querySelectorAll('.auth-form');
    
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = form.querySelectorAll('input[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff3a5f';
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });
            
            if (isValid) {
                // For demo purposes, show success message
                alert('Form submitted successfully!');
                
                // In a real application, you would submit the form data to a server
                // form.submit();
            }
        });
    });
    
    // Password visibility toggle (could be added if needed)
    
    // Link navigation
    const authLinks = document.querySelectorAll('.auth-link');
    
    authLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a # link, prevent default behavior
            if (href === '#') {
                e.preventDefault();
                alert('This is a demo link');
            }
        });
    });
});
