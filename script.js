document.querySelectorAll('.toggle-skill').forEach(button => {
    button.addEventListener('click', () => {
        const subSkills = button.nextElementSibling;
        subSkills.style.display = subSkills.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.toggle-project').forEach(button => {
    button.addEventListener('click', () => {
        const projects = button.nextElementSibling;
        projects.style.display = projects.style.display === 'block' ? 'none' : 'block';
    });
});
