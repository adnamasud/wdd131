let contador = localStorage.getItem("contador-avaliacoes");

if (contador === null) {
    contador = 0;
}
contador++;

localStorage.setItem("contador-avaliacoes", contador);

document.querySelector("#contador-avaliacoes").textContent = `Total de avaliações enviadas: ${contador}`;