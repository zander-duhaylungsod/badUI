document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const hiddenLoginBtn = document.getElementById('hidden-login-btn');
    const showPasswordCheckbox = document.getElementById('show-password');
    const passwordField = document.getElementById('password');

    // Show/Hide Password (reverse functionality)
    showPasswordCheckbox.addEventListener('change', () => {
        passwordField.type = showPasswordCheckbox.checked ? 'password' : 'text';
    });

    // Make login button move away when hovered over
    loginBtn.addEventListener('mouseover', () => {
        loginBtn.style.top = `${Math.random() * 500}px`;
        loginBtn.style.left = `${Math.random() * 800}px`;
    });

    // Real login button (hidden) redirects to main.html
    hiddenLoginBtn.addEventListener('click', () => {
        window.location.href = 'main.html';
    });
});
