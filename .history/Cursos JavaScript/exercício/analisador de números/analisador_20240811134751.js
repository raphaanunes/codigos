let num = document.querySelector('input#fnum');
let lista = documen.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}