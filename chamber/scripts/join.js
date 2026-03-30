const modalButtons = document.querySelectorAll('.open-modal');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).showModal();
    });
});