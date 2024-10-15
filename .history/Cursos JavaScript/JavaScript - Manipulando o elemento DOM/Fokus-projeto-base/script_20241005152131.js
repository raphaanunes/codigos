const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const timer = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');
const botaoIniciar = document.querySelector('.app__card-primart-button');


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/imagens/foco.png')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/Cursos JavaScript/JavaScript - Manipulando o elemento DOM/Fokus-projeto-base/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;