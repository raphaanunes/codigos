/*console.log(produtos.forEach(caneca => {
    console.log(caneca.titulo);
    console.log(caneca.descricao);
    if (caneca.link) {
        console.log(caneca.link);
    }
})
);*/

let section = document.getElementById("resultados-pesquisa")

section.innerHTML = `
    ${produtos[0].titulo}
`