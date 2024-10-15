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
            <a href="#" target="_blank"> </a>
        </h2>
        <p class="descricao-meta">Uma Toque de Positividade no seu Dia a Dia. A Caneca Live é mais do que apenas um recipiente para sua bebida favorita.</p>
        <a href="https://cdn.awsli.com.br/600x1000/960/960037/produto/56227831/caneca-live-i7nrzsn7dw.jpg" target="_blank">Mais informações</a>
    </div>
`