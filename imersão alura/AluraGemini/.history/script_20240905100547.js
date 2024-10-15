function pesquisar() { 
        
}

/*console.log(produtos.forEach(caneca => {
    console.log(caneca.titulo);
    console.log(caneca.descricao);
    if (caneca.link) {
        console.log(caneca.link);
    }
})
);*/

let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let dado of produtos) {
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> ${dado.titulo} </a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
    </div>
`
}

section.innerHTML = resultados