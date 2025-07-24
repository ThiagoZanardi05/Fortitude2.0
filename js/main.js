// js/main.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. Efeito de Header com Scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // 2. Funcionalidade do Menu Mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 3. NOVO: Funcionalidade das Abas (Tabs) para a página ISO Containers
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões e conteúdos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Adiciona a classe 'active' ao botão clicado e ao conteúdo correspondente
                button.classList.add('active');
                const targetTab = document.getElementById(button.getAttribute('data-tab'));
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            });
        });
    }
});

// 3. NOVO: Funcionalidade das Abas (Tabs) com suporte para Dropdown Mobile
const tabsContainer = document.querySelector('.tabs-container');
if (tabsContainer) {
    const tabButtons = tabsContainer.querySelectorAll('.tab-button');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');
    const tabsDropdown = tabsContainer.querySelector('.tabs-dropdown');

    function showTab(tabId) {
        tabContents.forEach(content => {
            content.id === tabId ? content.classList.add('active') : content.classList.remove('active');
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showTab(targetTab);
        });
    });

    tabsDropdown.addEventListener('change', () => {
        const targetTab = tabsDropdown.value;
        showTab(targetTab);
    });
}