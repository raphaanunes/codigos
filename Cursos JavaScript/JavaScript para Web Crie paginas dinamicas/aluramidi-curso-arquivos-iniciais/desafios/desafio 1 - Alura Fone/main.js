//document.querySelector('input[type=tel]');
//usar no DevTolls

// Seleciona todos os botões dentro da seção com a classe 'teclado'
const botoes = document.querySelectorAll('.teclado input[type="button"]');

// Seleciona o campo de entrada de telefone
const campoTelefone = document.getElementById('telefone');

// Adiciona um evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Adiciona o valor do botão ao campo de telefone
        campoTelefone.value += botao.value;
    });
});