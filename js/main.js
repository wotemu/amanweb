// ── Section visibility ──────────────────────────────────────────────────
const alwaysVisible = ['home', 'description'];

function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.style.display = 'none');

    if (id === 'home') {
        alwaysVisible.forEach(s => {
            let el = document.getElementById(s);
            if (el) el.style.display = 'block';
        });
        window.scrollTo({ top: 0 });
    } else {
        alwaysVisible.forEach(s => {
            let el = document.getElementById(s);
            if (el) el.style.display = 'none';
        });
        let target = document.getElementById(id);
        if (target) {
            target.style.display = 'block';
            window.scrollTo({ top: 0 });
        }
    }

    // Close mobile nav after clicking a link
    const navCollapse = document.getElementById('nav');
    if (navCollapse && navCollapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.click();
    }
}

// ── Lightbox ────────────────────────────────────────────────────────────
const imgs = [
    'images/IM000083.jpg',
    'images/IM000084.jpg',
    'images/afar_zone_5_2005_11.jpg',
    'images/afar_zone2.jpg',
    'images/afar_zone_2_026.jpg',
    'images/afar_zone_2_035.jpg',
    'images/afar_zone_2_047.jpg',
    'images/IM000083.jpg',
    'images/IM000084.jpg',
    'images/IM000085.jpg',
    'images/IM000090.jpg',
    'images/IM000091.jpg',
    'images/whatsapp4.jpeg',
    'images/afar_zone_5_2005.jpg',
    'images/afar_zone_5_2005_10.jpg'
];

let current = 0;

function openLightbox(i) {
    current = i;
    document.getElementById('lightbox-img').src = imgs[current];
    document.getElementById('lightbox').classList.add('active');
}

function navigateLightbox(direction) {
    current = (current + direction + imgs.length) % imgs.length;
    document.getElementById('lightbox-img').src = imgs[current];
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function closeLightboxOnBackdrop(e) {
    if (e.target.id === 'lightbox') closeLightbox();
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function (e) {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'Escape') closeLightbox();
});