document.addEventListener('DOMContentLoaded', function() {

    // Responsive Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('showing');
    });

    // Dynamic Content Loading for Projects (Placeholder Example)
    const projectGrid = document.querySelector('.project-grid');
    const projects = ['Project 1', 'Project 2', 'Project 3']; // Placeholder project titles

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.textContent = project;
        projectGrid.appendChild(projectCard);
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});
