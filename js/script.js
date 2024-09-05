const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.main-content div');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(section => section.classList.remove('active'));
        document.querySelector(`.${link.id.split('-')[0]}`).classList.add('active');
    });
});
