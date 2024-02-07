const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('.section');
let navLink = document.querySelectorAll('.link');


menu.addEventListener("click", ()=> nav.classList.toggle('active'));

navbar.addEventListener("click", ()=> nav.classList.toggle('active'));

window.addEventListener('scroll',()=>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let heightSection = sec.offsetHeight-120;
        let idSection = sec.getAttribute('id');

        if(top >= offset && top < offset + heightSection){
            navLink.forEach(link => {
                link.classList.remove('active')
                document.querySelector(`header nav a[href*=${idSection}]`).classList.add('active')
            })
        }
    })
})

