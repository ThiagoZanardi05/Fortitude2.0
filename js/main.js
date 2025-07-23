// js/main.js

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    // Adiciona a classe 'scrolled' ao header quando o scroll for maior que 50px
    // Remove a classe quando o scroll volta ao topo
    header.classList.toggle('scrolled', window.scrollY > 50);
});