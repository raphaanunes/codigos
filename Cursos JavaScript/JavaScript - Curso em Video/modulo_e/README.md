# Módulo E: Repetições em JavaScript

No módulo E, entraremos em contato com 3 tipos de laços de repetição em JS:

1. Repetição com teste no início (while loop)
2. Repetição com teste no final (do…while loop)
3. Repetições com controle (for loop)

Obviamente o módulo terá exercícios propostos também.

# Aula 13: Repetições (Parte 1)

As estruturas de repetição também podem ser chamadas, além de **repetições**, de **laços** e **iterações**.

## O laço while

Exemplo de repetição usando uma função chamada `comerPizza()`:

```javascript
function comerPizza() {
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
}
```

```javascript
// Sintaxe básica do while:

while(condição) {
  // write code here
}
```

```javascript
function comerPizza() {
  while (temFatia()) {
    comerFatia()
  }
}
```

## O laço do…while

```javascript
do {
  // write some code here
} while (condição)
```

# Aula 14: Repetições (Parte 2)

Nesta aula, veremos a estrutura **for**.

> "Não adianta você tentar chegar no meio da festa e perguntar se tá na hora de cantar parabéns." 
>
> (GUANABARA, G., 2019)

> "O Guanabara tem umas frases de efeito nada a ver, mas a gente gosta dele ainda assim." 
>
> (TEIXEIRA, G., 2019)

No **for** existem três passos: a **inicialização**, o **teste lógico** e o **incremento**.

```javascript
// Sintaxe do for:
for (inicio; teste; incremento) {
  // Write some code here
}
```

```javascript
// Exemplo de como o while() funciona:
var c = 1
while (c <= 10) {
  // Faz algo
  c++
}

// O mesmo código, só que no for:
for (var c=1; c<=10; c++) {
  // Faz algo
}
```

# Exercícios JavaScript (Parte 4/8)