let nome = prompt ("Digite seu nome:")
console.log(`Boas vindas! Ola, ${nome}`);
alert(`Boas vindas! Ola, ${nome}.`);
let idade; 
idade = prompt(`Qual a sua idade?`)
    if(idade >= 18){ 
    alert("Então você é de maior?")
    } else{
        alert("Então ainda é de menor?")
    }

let numero;
numero = prompt("Me diga um número, podendo ser positivo ou negativo:")
if(numero > 0){
    alert("Seu número é positivo")
}else {
    if(numero == 0){
        alert("Seu numero é 0")
    }else {
        alert("Seu numero é negativo")
    }
}

let materia;
materia = prompt ("E qual a sua materia favorita em seu curso?");
console.log(`${materia}`);
alert(`Aaaaaaah, então você gosta de ${materia}.`);
alert("Você sabia que um profissional da sua área ganha em média R$3.000,00?");
//let valor1 = 33;
//let valor2 = 32; 
//let resultado = (valor1 - valor2) ;
//console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
//alert(`Você sabia que a diferença entre ${valor1} e ${valor2} é igual a ${resultado}?`)

//loop para contagem de 1 a 10
//let contador = 0;

//while(contador <= 10){
//    console.log(contador);
//    contador++;
//alert(`Contando: ${contador}`);
//}

//teste para uma nota qualquer
let notaMateria
notaMateria = prompt(`Qual a sua nota em ${materia}?`)

if(notaMateria >= 7){
    alert("Aprovado!!")
} else{
    alert("Reprovado!!")
}

//Math.random aleatorio
//let numeroSecreto = Math.random();
//console.log(numeroSecreto)

//Math.random de 0 a 10
//let numeroSecreto = parseInt(Math.random() * 10 + 1);
//console.log(numeroSecreto)

let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto)