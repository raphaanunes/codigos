const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const startPausebt = document.querySelector('#start-pause')
const timer = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botaoIniciar = document.querySelector('.app__card-primart-button');
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/sons/Warsongs -Piercing Light (Mako Remix).mp3')
const musicaPlay = new Audio('/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/sons/play.wav') 
const musicaStop = new Audio('/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/sons/pause.mp3')
const musicaFim = new Audio('/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/sons/beep.mp3')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const pausaImg = document.querySelector('.app__card-primary-button-icon')

let intervaloId = null
let tempoDecorridoEmSegundos = 5

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()

    } else {
        musica.pause()
    }
})


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            
            break;

            case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
                `

            break;

            case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar a superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
                `

            break;
    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0){
        musicaFim.play()
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('temporizador: ' + tempoDecorridoEmSegundos)
}

startPausebt.addEventListener('click', () => {
    iniciarOuPausar()
})

function iniciarOuPausar() {
    if(intervaloId) {
        musicaStop.play()
        zerar()
        return
    }
    musicaPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    pausaImg.setAttribute('src', '/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/imagens/pause.png')
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    intervaloId = null
}