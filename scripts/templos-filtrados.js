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

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Rio de Janeiro, Brasil",
        localizacao: "Rio de Janeiro, Brasil",
        consagracao: "2019, 2 de junho",
        area: 29966,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    },
    {
        nomeDoTemplo: "Recife, Brasil",
        localizacao: "Recife, Brasil",
        consagracao: "2000, 10 de dezembro",
        area: 37200,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    }

];
const resGrid = document.querySelector(".res-grid");

function mostrarTemplos(listaTemplos) {
    listaTemplos.forEach(function (templo) {
        const cartao = document.createElement("figure");

        const titulo = document.createElement("h2");
        titulo.textContent = templo.nomeDoTemplo;
        cartao.appendChild(titulo);

        const localizacao = document.createElement("p");
        localizacao.innerHTML = "<b>Localização: </b>" + templo.localizacao;
        cartao.appendChild(localizacao);

        const consagracao = document.createElement("p");
        consagracao.innerHTML = "<b>Consagração: </b>" + templo.consagracao;
        cartao.appendChild(consagracao);

        const area = document.createElement("p");
        area.innerHTML = "<b>Área: </b>" + templo.area + " pés quadrados";
        cartao.appendChild(area);

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";
        cartao.appendChild(imagem);

        resGrid.appendChild(cartao);
    });
}

mostrarTemplos(templos);

function filtrarTemplos(filtro) {
    let templosFiltrados = [];

    switch (filtro) {
        case "antigo":
            templosFiltrados = templos.filter(templo =>
                Number(templo.consagracao.split(",")[0]) < 1900
            );
            break;

        case "novo":
            templosFiltrados = templos.filter(templo =>
                Number(templo.consagracao.split(",")[0]) > 2000
            );
            break;

        case "grande":
            templosFiltrados = templos.filter(templo => templo.area > 90000);
            break;

        case "pequeno":
            templosFiltrados = templos.filter(templo => templo.area < 10000);
            break;

        default:
            templosFiltrados = templos;
    }

    resGrid.innerHTML = "";
    mostrarTemplos(templosFiltrados);
}

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        filtrarTemplos(this.dataset.filter);
    });
});



const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

const ultimaModificacao = document.querySelector("#ultimaModificacao");

ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`