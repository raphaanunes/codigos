function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("place").value

    //se o campoPesquisa for uma string vazia:
    if (campoPesquisa == "") {
      section.innerHTML = "Nenhum produto encontrado"
      return
    }


    campoPesquisa = campoPesquisa.toLowerCase();
   
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
      
    // Itera sobre cada produto e adiciona um elemento HTML para cada um
    for (let dado of produtos) {

      //para a pesquisa sair de forma padronizada como letras minusculas
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      //se titulo includes campoPesquisa...
      //então faça...

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
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

  if (!resultados) {
    resultados = "Nenhum produto encontrado"
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