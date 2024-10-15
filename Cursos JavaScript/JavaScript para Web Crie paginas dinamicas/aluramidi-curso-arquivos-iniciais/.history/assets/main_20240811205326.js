//seleção da lista com a classe tecla
function som (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    console.log(instrumento)

    const idAudio = `#som_${instrumeto}`

    //'#som_{instrumento}'

    tecla.onclick = function () {
        som('#som_tecla')
    };
    contador++;

    console.log(contador)
}