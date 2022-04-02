function criarBarraPesquisa() {
 
 const  barraPesquisa = document.createElement('input');

  barraPesquisa.placeholder="O que deseja encontrar?";
  barraPesquisa.classList.add("barra-pesquisa");
  return barraPesquisa; 
}

function criarBotaoPesquisa() {
  const botaoPesquisa = document.createElement("button");
  botaoPesquisa.innerHTML=`
      <img src="./assets/img/icons/lupa-pesquisa.svg" alt="Lupa de pesquisa">
  `;

  return botaoPesquisa;
}

function pesquisa() {
  if (this.window.innerWidth >= 768) {
    console.log('Criando uma barra de pesquisa');
    this.document.querySelector(".esquerda").appendChild(criarBarraPesquisa());
  }
  if (this.window.innerWidth >= 320) {
    console.log('Criando um botão de pesquisa');
    this.document.querySelector(".esquerda").appendChild(criarBarraPesquisa());
  }
}

window.addEventListener("resize", function (){
  if (this.window.innerWidth >=  720 ) {
    console.log('Criando a barra de pesquisa');
    // this.document.querySelector('.botao-pesquisa').remove()
    // this.document.querySelector(".esquerda").appendChild(criarBarraPesquisa());
  }

  if (this.window.innerWidth <= 320) {
    console.log('aqui')
    this.document.querySelector('.barra-pesquisa').remove()
    this.document.querySelector(".topo").appendChild(criarBotaoPesquisa());
  }
})

pesquisa()