//seleção da lista com a classe tecla
function som (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado')
    }

    if (elemento != null) {
        
        //Checa se o elemento é do tipo audio, retornando true ou false
        //console.log(elemento.localName === 'audio');

        if (elemento.localName === 'audio') {}
        elemento.play(); 
    }
    
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

    //para configurar um evento de teclado e padronizalo com o click do mouse
    tecla.onkeydown = function (event) {

        //ver qual tecla foi apertada
        //console.log(event.code)

        if (event.code === 'Space'|| event.code === 'Enter' || event.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        } 

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //console.log(contador)
}
