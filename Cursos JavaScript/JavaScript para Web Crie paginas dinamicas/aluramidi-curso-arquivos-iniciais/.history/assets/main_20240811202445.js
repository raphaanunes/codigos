//seleção da lista com a classe tecla
const listaDeSom = document.querySelectorAll('.som')

function som(){
    document.querySelector('.som').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = pom;
    contador++;

    console.log(contador)
}