
window.addEventListener('load', function() {
    const toggleButton = document.getElementsByClassName('nav-toggle')[0];
    const navbarLinks  = document.getElementsByClassName('nav-link');
    toggleButton.addEventListener("click", function() {
    for (var i = 0; i < navbarLinks.length; i++) 
        navbarLinks[i].classList.toggle("active");
    });
});