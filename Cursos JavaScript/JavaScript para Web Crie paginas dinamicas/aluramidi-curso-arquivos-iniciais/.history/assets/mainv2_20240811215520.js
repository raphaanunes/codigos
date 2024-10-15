//seleção da lista com a classe tecla
function som (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    

    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    //'#som_{instrumento}'

    tecla.onclick = function () {
        som(idAudio)
    };

    tecla.onkeydown = function (event) {

        //ver qual tecla foi apertada
        console.log(event.code)

        if (event.code == 'Space') {
            tecla.classList.add('ativa');
        } else {

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //console.log(contador)
}
