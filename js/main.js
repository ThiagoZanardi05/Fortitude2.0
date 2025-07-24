// js/main.js (dentro do DOMContentLoaded)

// 3. VERSÃO FINAL: Funcionalidade das Abas (Desktop) e Dropdown Customizado (Mobile)
const tabsContainer = document.querySelector('.tabs-container');
if (tabsContainer) {
    const tabButtons = tabsContainer.querySelectorAll('.tab-button');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');
    
    // Lógica do Dropdown Customizado
    const customDropdown = tabsContainer.querySelector('.custom-dropdown');
    const selectedOption = tabsContainer.querySelector('.selected-option');
    const optionsList = tabsContainer.querySelector('.options-list');
    const options = tabsContainer.querySelectorAll('.options-list li');

    function showTab(tabId) {
        tabContents.forEach(content => {
            content.id === tabId ? content.classList.add('active') : content.classList.remove('active');
        });
    }

    // Event listener para os botões do desktop
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showTab(targetTab);
        });
    });

    // Event listener para abrir/fechar o dropdown customizado
    selectedOption.addEventListener('click', () => {
        customDropdown.classList.toggle('open');
    });

    // Event listener para selecionar uma opção no dropdown
    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.querySelector('span').textContent = option.textContent;
            customDropdown.classList.remove('open');
            const targetTab = option.getAttribute('data-tab');
            showTab(targetTab);
        });
    });

    // Fecha o dropdown se clicar fora dele
    document.addEventListener('click', function(e) {
        if (!customDropdown.contains(e.target)) {
            customDropdown.classList.remove('open');
        }
    });
}