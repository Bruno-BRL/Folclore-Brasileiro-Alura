function pesquisar() {
 let section = document.getElementById("resultados-pesquisa")

 let campoPesquisa = document.getElementById("campo-pesquisa").value

 if (campoPesquisa == ""){
    section.innerHTML = "<p> Nada foi encontrado. Por favor insira uma lenda ou uma região do Brasil.</p>"
    return
 }

campoPesquisa = campoPesquisa.toLowerCase()

 console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descrição = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    if (dado.titulo.includes(campoPesquisa) || dado.descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
    <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p> ${dado.descrição}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
    `;
    }

    if (!resultados) {
       resultados = "<p>Nada foi econtrado</p>"
    }
}

section.innerHTML = resultados   
}

