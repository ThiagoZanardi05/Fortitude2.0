// js/main.js

document.addEventListener('DOMContentLoaded', function() {

    // Efeito de Header com Scroll (seu código original)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // NOVO: Funcionalidade do Menu Mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Mostra/esconde o menu
            const icon = mobileMenuToggle.querySelector('i');
            // Muda o ícone de hambúrguer para 'X' e vice-versa
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});