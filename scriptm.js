document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup');
    const pseudoCloseBtn = document.getElementById('pseudo-close-btn');
    const realCloseBtn = document.getElementById('real-close-btn');

    // Pseudo close button does nothing
    pseudoCloseBtn.addEventListener('click', () => {
        alert("This is a fake close button!");
    });

    // Real hidden close button closes the popup
    realCloseBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Scrolling down takes you to page2.html
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // After some scroll length
            window.location.href = 'page2.html';
        }
    });
});
