document.addEventListener('DOMContentLoaded', () => {

    // ==============================================
    // 1. HEADER E MENU DE NAVEGAÇÃO PRINCIPAL
    // ==============================================
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona classe 'scrolled' ao header quando a página é rolada
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Lógica para o menu hamburguer
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Lógica para os submenus (dropdowns) no mobile
    if (navMenu) {
        const dropdowns = navMenu.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            link.addEventListener('click', function(event) {
                // Aplica a lógica apenas se o menu mobile estiver visível
                if (window.innerWidth <= 992) {
                    event.preventDefault(); // Previne a navegação
                    
                    // Fecha outros submenus abertos
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });

                    // Alterna o submenu atual
                    dropdown.classList.toggle('active');
                }
            });
        });
    }


    // ==============================================
    // 2. ABAS (TABS) DAS PÁGINAS DE PRODUTOS
    // ==============================================
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabContents = tabsContainer.querySelectorAll('.tab-content');
        const customDropdown = tabsContainer.querySelector('.custom-dropdown');

        function showTab(tabId) {
            if (!tabId) return;
            tabContents.forEach(content => {
                content.id === tabId ? content.classList.add('active') : content.classList.remove('active');
            });
        }

        // Eventos para as abas em Desktop
        if(tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetTab = button.getAttribute('data-tab');
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    showTab(targetTab);
                });
            });
        }

        // Eventos para o dropdown customizado em Mobile
        if (customDropdown) {
            const selectedOption = customDropdown.querySelector('.selected-option');
            const options = customDropdown.querySelectorAll('.options-list li');

            if (selectedOption) {
                selectedOption.addEventListener('click', () => {
                    customDropdown.classList.toggle('open');
                });
            }

            if (options.length > 0) {
                options.forEach(option => {
                    option.addEventListener('click', () => {
                        const targetTab = option.getAttribute('data-tab');
                        if (selectedOption) {
                            selectedOption.querySelector('span').textContent = option.textContent;
                        }
                        customDropdown.classList.remove('open');
                        showTab(targetTab);
                    });
                });
            }

            // Fecha o dropdown se clicar fora dele
            document.addEventListener('click', function(event) {
                if (!customDropdown.contains(event.target)) {
                    customDropdown.classList.remove('open');
                }
            });
        }
    }
});