document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.nav-menu');
    var hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle the .active class on the menu
        hamburger.setAttribute('aria-expanded', menu.classList.contains('active'));
    });
});