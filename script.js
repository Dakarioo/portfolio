// Script JS simple pour le portfolio Antonin Cavory--Dupuis
// Gère le scroll fluide et quelques animations légères

// Scroll fluide pour les liens de la navbar
// (fonctionne sur tous les navigateurs modernes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animation légère sur la navbar lors du scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.background = 'var(--color-bg-dark)';
    } else {
        navbar.style.background = 'var(--color-card)';
    }
});
