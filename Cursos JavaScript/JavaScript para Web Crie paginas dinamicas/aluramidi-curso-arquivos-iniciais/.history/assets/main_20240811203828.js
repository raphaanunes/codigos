//seleção da lista com a classe tecla
function som (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = fuction () {
        som('#som_tecla_pom')
    };
    contador++;

    console.log(contador)
}