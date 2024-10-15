//seleção da lista com a classe tecla

function pom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


listaDeTeclas[1].onclick = clap;
listaDeTeclas[2].onclick = tim;
listaDeTeclas[3].onclick = puff;
listaDeTeclas[4].onclick = splash;
listaDeTeclas[5].onclick = toim;
listaDeTeclas[6].onclick = psh;
listaDeTeclas[7].onclick = tic;
listaDeTeclas[8].onclick = tom;

let contador = 0;

//enquanto
while (contador < 9){
    listaDeTeclas[contador].onclick = pom;
    contador++;

    console.log(contador)
}