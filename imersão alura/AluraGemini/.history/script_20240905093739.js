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
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> ${produtos[0].titulo} </a>
        </h2>
        <p class="descricao-meta">${produtos[0].descricao}</p>
        <a href="https://cdn.awsli.com.br/600x1000/960/960037/produto/56227831/caneca-live-i7nrzsn7dw.jpg" target="_blank">Mais informações</a>
    </div>

    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> ${produtos[1].titulo} </a>
        </h2>
        <p class="descricao-meta">${produtos[1].descricao}</p>
        <a href="#" target="_blank">Mais informações</a>
    </div>
        
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> Caneca Cromada </a>
        </h2>
        <p class="descricao-meta">${produtos[2].descricao}</a>
    </div> 
`