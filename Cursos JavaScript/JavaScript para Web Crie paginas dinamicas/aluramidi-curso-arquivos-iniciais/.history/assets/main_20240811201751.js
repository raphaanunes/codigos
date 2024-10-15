//seleção da lista com a classe tecla

function pom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = pom;
    contador++;

    console.log(contador)
}