// Script JS portfolio Antonin Cavory--Dupuis
// Scroll fluide, accessibilité, focus visible, UX premium multi-pages

// Scroll fluide pour les liens internes (navbar, boutons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Mettre le focus sur la section pour l'accessibilité
            setTimeout(() => { target.setAttribute('tabindex', '-1'); target.focus(); }, 400);
        }
    });
});

// Animation légère sur la navbar lors du scroll (desktop)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.background = 'var(--color-bg-dark)';
        navbar.style.boxShadow = '0 2px 12px var(--color-shadow)';
    } else {
        navbar.style.background = 'var(--color-card)';
        navbar.style.boxShadow = '0 2px 8px var(--color-shadow)';
    }
});

// Focus visible sur navigation clavier (tab)
document.body.addEventListener('keyup', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});
document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('user-is-tabbing');
});

// Accessibilité : focus visible sur cartes projets (project-link)
document.querySelectorAll('.project-link').forEach(card => {
    card.addEventListener('focus', function() {
        this.classList.add('focus-visible');
    });
    card.addEventListener('blur', function() {
        this.classList.remove('focus-visible');
    });
});

// Amélioration UX : toute la carte projet est cliquable (déjà géré par <a>), curseur pointer via CSS
// Bonus : scroll en haut de page sur navigation projet
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
