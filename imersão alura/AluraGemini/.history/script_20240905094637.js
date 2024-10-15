/*console.log(produtos.forEach(caneca => {
    console.log(caneca.titulo);
    console.log(caneca.descricao);
    if (caneca.link) {
        console.log(caneca.link);
    }
})
);*/

let section = document.getElementById("resultados-pesquisa")

for (let dado of produtos) {
    section.innerHTML = `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> ${produtos.titulo} </a>
        </h2>
        <p class="descricao-meta">${produtos.descricao}</p>
    </div>
`
}

