let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let naclinks = document.querySelector('header nav a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active')
            })
        }
    })
}
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}