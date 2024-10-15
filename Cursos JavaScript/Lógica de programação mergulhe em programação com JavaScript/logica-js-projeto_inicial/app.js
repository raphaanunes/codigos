alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
//Math.random () gera um numero aleatorio maior que zero e menor que 1, a muplicação por 10 garante que seja >= 0, e o + 1 garante que seja >0 
let chute;
let tentativas = 1;

//while - enquanto - o chute nao for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
        console.log(`Número secreto é o ${numeroSecreto}`);
        //também podemos substituir o ${numeroSecreto} fechando as aspas em "o " e adicionando a cocatenação + numeroSecreto
    } else {
        if (chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

//Na linguagem ternaria, podemos escrever o codigo da seguinte forma (e é utilizado dentro do mercado de trabalho)
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto com ${tentativas} tentativas!`);
//} else{
//    alert(`Isso ai! Você descobriu o número secreto com ${tentativas} tentativa!`);
//}