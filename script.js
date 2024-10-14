document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const hiddenList = toggle.nextElementSibling;
        hiddenList.classList.toggle('hidden');
    });
});
