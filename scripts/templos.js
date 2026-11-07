const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu")

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar")
    if (menu.classList.contains("mostrar")) {
        botaoMenu.textContent = "X";
    } else {
        botaoMenu.textContent = "☰";
    }
});

const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

const ultimaModificacao = document.querySelector("#ultimaModificacao");

ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`