const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');
let arrayCapitulos = obterListaDeCapitulos() || [];
arrayCapitulos.forEach(capitulo => exibirLista(capitulo));
botao.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        exibirLista(input.value);
        arrayCapitulos.push(input.value);
        definirListaDeCapitulos();
        input.value = '';
    }
    input.focus();
})
