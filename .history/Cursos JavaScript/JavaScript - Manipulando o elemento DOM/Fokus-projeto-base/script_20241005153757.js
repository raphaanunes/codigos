const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const timer = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');
const botaoIniciar = document.querySelector('.app__card-primart-button');

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/imagens/${contexto}.png`)    
}