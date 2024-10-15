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
        <p class="descricao-meta">Uma Toque de Positividade no seu Dia a Dia. A Caneca Live é mais do que apenas um recipiente para sua bebida favorita.</p>
        <a href="https://cdn.awsli.com.br/600x1000/960/960037/produto/56227831/caneca-live-i7nrzsn7dw.jpg" target="_blank">Mais informações</a>
    </div>

    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> Caneca Mágica </a>
        </h2>
        <p class="descricao-meta">Revelando imagens incríveis com o calor da sua bebida. Uma experiência mágica a cada gole.</p>
        <a href="#" target="_blank">Mais informações</a>
    </div>
        
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank"> Caneca Cromada </a>
        </h2>
        <p class="descricao-meta">Elegância e brilho em cada detalhe. A Caneca Cromada é perfeita para quem busca um toque de sofisticação.</p>
        <a href="#" target="_blank">Mais informações</a>
    </div> 
`