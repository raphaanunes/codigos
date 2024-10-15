//seleção da lista com a classe tecla

function pom(){
    document.querySelector('#som_tecla_pom').play();
}

function clap(){
    document.querySelector('#som_tecla_clap').play();
}

function tim(){
    document.querySelector('#som_tecla_tim').play();
}

function puff(){
    document.querySelector('#som_tecla_puff').play();
}

function splash(){
    document.querySelector('#som_tecla_splash').play();
}

function toim(){
    document.querySelector('#som_tecla_toim').play();
}

function psh(){
    document.querySelector('#som_tecla_psh').play();
}

function tic(){
    document.querySelector('#som_tecla_tic').play();
}

function tom(){
    document.querySelector('#som_tecla_tom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = pom;
listaDeTeclas[1].onclick = clap;
listaDeTeclas[2].onclick = tim;
listaDeTeclas[3].onclick = puff;
listaDeTeclas[4].onclick = splash;
listaDeTeclas[5].onclick = toim;
listaDeTeclas[6].onclick = psh;
listaDeTeclas[7].onclick = tic;
listaDeTeclas[8].onclick = tom;