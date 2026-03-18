// Mobile nav toggle
(function() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.addEventListener('click', function() {
            links.classList.toggle('open');
        });
        // Close menu on link click
        links.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                links.classList.remove('open');
            });
        });
    }
})();

// Scroll: add solid bg to nav
(function() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(10, 15, 26, 0.97)';
        } else {
            nav.style.background = 'rgba(10, 15, 26, 0.85)';
        }
    });
})();
