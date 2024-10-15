function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("place").value

    console.log(campoPesquisa)
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
      
    // Itera sobre cada produto e adiciona um elemento HTML para cada um
    for (let dado of produtos) {
      //se titulo includes campoPesquisa...
      //então faça...
      if (dado.titulo.includes(campoPesquisa)){
        // Cria uma div com as informações do produto
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank"> ${dado.titulo} </a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
    `;
    }
  }
  
  // Atualiza o conteúdo HTML da seção com os resultados
  section.innerHTML = resultados;
}

/*console.log(produtos.forEach(caneca => {
    console.log(caneca.titulo);
    console.log(caneca.descricao);
    if (caneca.link) {
        console.log(caneca.link);
    }
})
);*/