function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("place").value

    // Função para concatenar as famílias
    function getFamilias(dado) {
      let familias = [];
      for (let i = 1; i <= 3; i++) {
          let familiaProp = 'familia' + i;
          if (dado[familiaProp]) {
              familias.push(dado[familiaProp]);
          }
      }
      return familias.join(', ');
  }

    //se o campoPesquisa for uma string vazia:
    if (campoPesquisa == "") {
      section.innerHTML = "Nada Encontrato."
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

      // Concatena as famílias
      const todasFamilias = getFamilias(dado);

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria uma div com as informações do produto
      resultados += `
      <div class="item-resultado">
        <table>
          <tr>
            <td class="imagem">
              <img src="${dado.imagem}" alt="${dado.titulo}" class="principal">
            </td>
           <td class="dados">
             <h2>${dado.titulo}</h2>
             <p>${dado.forma}</p>
             <p>Atributo: <img src="${dado.atributo}" alt="${dado.descAtributo}" title="${dado.descAtributo}"></p>
             <p>Familia: <img src="${dado.familia}" alt="${dado.descFamilia}" title="${dado.descFamilia}"></p>
             <p>Força: <img src="${dado.forca}" alt="${dado.descForca}" title="${dado.descForca}"></p>
             <p>Familia: <img src="${dado.fraqueza}" alt="${dado.descFraqueza}" title="${dado.descFraqueza}"></p>
           </td>
           <td class="status">
            <p>${dado.descricao}</p>
            <p>${dado.hp}</p>
            <p>${dado.sp}</p>
            <p>${dado.str}</p>
            <p>${dado.int}</p>
            <p>${dado.def}</p>
            <p>${dado.res}</p>
            <p>${dado.spd}</p>
          </td>
          <td>
            <div class="evolucao">
              <p><img src="${dado.evo1}" alt="${dado.nomeEvo1}" title="${dado.nomeEvo1}" class="evo"></p>
              <div class="seta-container">
              <img src="${dado.seta}" class="seta"> 
              <p class="seta-texto">No level 15</p>
              </div>
              <p><img src="${dado.evo2}" alt="${dado.nomeEvo2}" title="${dado.nomeEvo2}" class="evo"></p>
              <div class="seta-container">
              <img src="${dado.seta}" class="seta">
              <p class="seta-texto">No level 50</p>
              </div>
              <p><img src="${dado.evo3}" alt="${dado.nomeEvo3}" title="${dado.nomeEvo3}" class="evo"></p>
              <div class="seta-container">
              <img src="${dado.seta}" class="seta">
              <p class="seta-texto">No level 90</p>
              </div>
              <p><img src="${dado.evo4}" alt="${dado.nomeEvo4}" title="${dado.nomeEvo4}" class="evo"></p>
            </div>
          <td>
        </tr>
    </table>
          <p class="aviso">Passe o mouse nos icones para visualizar vantagem e desvantagem</p>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "Nada Encontrado."
  }
  
  // Atualiza o conteúdo HTML da seção com os resultados
  section.innerHTML = resultados;
}