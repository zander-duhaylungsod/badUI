document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');

    // Go back to main page
    backBtn.addEventListener('click', () => {
        window.location.href = 'main.html';
    });
});
