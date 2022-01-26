let menuBtn = document.querySelector('.menu-btn');
var navLinks = document.querySelector('.nav-links');
menuBtn.onclick = function () {
    navLinks.classList.toggle('open');
    menuBtn.classList.toggle('open');
}
window.addEventListener('scroll', function () {
    let navbar = document.querySelector(".prodes-nav");
    let navlinks = document.querySelector('.nav-links');
    navbar.classList.toggle('sticky', window.scrollY > 0);
    navlinks.classList.toggle('sticky', window.scrollY > 0);
    let burger = document.querySelector(".menu-btn__burger");
    burger.classList.toggle('scrolled', window.scrollY > 0);
})