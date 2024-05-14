window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var scrollPos = window.scrollY;

    if (scrollPos > 100) { 
        menu.classList.add('scuro');
    } else {
        menu.classList.remove('scuro');
    }
});

const prenota = document.getElementById('prenota');

