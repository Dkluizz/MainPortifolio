const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.link');

function setActiveNavLink(id) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
}

function updateActiveSection() {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
        const offset = sec.offsetTop;
        const heightSection = sec.offsetHeight -112;
        const idSection = sec.getAttribute('id');
        if (scrollY >= offset && scrollY < offset + heightSection) {
            setActiveNavLink(idSection);
        }
    });
}

menu.addEventListener('click', () => nav.classList.toggle('active'));
navbar.addEventListener('click', () => nav.classList.toggle('active'));
window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);


const header = document.querySelector('header');

function toggleHeaderScrollClass() {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

window.addEventListener('scroll', toggleHeaderScrollClass);


