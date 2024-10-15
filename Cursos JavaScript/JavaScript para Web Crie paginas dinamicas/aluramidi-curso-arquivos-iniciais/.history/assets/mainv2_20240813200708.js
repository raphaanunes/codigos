//seleção da lista com a classe tecla
function som (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        
        //Checa se o elemento é do tipo audio, retornando true ou false
        //console.log(elemento.localName === 'audio');
        elemento.play(); 
    }
     else {
        console.log('Elemento não encontrado ou seletor inválido')

    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

    /* poderiamos também ter utilizado a estrutura
        
        document.querySelectorAll('.tecla').forEach(function(tecla) {
            tecla.addEventListener('click', function() { 
            
            forEach é usado para percorrer cada tecla usando um loop 
            
            em seguida, na função do event listener, use classList.add('ativa') para adicionar a classe ativa à tecla clicada.
            
                this.classList.add('ativa')
                
            e para a remoção, poderiamos usar a estrutura
            
                    const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});
*/

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
