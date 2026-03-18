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

// Highlight Environments nav link when #environments hash is present
(function() {
    if (window.location.hash === '#environments') {
        var links = document.querySelectorAll('.nav-links a');
        links.forEach(function(a) {
            a.classList.remove('active');
            if (a.getAttribute('href') === 'history.html#environments') {
                a.classList.add('active');
            }
        });
    }
})();
