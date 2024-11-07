document.addEventListener("DOMContentLoaded", function () {
    // Função para alternar a classe 'active' nos itens do menu principal
    const menuItems = document.querySelectorAll("nav ul > li");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    // Função para exibir/ocultar submenus ao clicar nos títulos
    const menuHeaders = document.querySelectorAll('.submenu-toggle');
    menuHeaders.forEach(header => {
        header.addEventListener('click', function (event) {
            // Evita que o clique no h2 afete o li pai
            event.stopPropagation();

            // Alterna a visibilidade do submenu associado
            const submenu = header.nextElementSibling;
            submenu.style.display = (submenu.style.display === "none" || submenu.style.display === "") ? "block" : "none";
        });
    });
});
