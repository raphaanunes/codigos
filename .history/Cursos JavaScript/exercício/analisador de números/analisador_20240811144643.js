document.getElementById('adicionar').addEventListener('click', adicionar);
document.getElementById('finalizar').addEventListener('click', finalizar);

let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    }
}