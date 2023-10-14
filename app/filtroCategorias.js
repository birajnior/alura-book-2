const btnFiltros = document.querySelectorAll(".btn");
btnFiltros.forEach((btnFiltros) =>
  btnFiltros.addEventListener("click", filtraLivros)
);

function filtraLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);

  exibirOsLivrosNaTela(livrosFiltrados);

  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivros(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

// metodo sort()
const btnOrdenarPreco = document.querySelector("#btnOrdenarPorPreco");
btnOrdenarPreco.addEventListener("click", filtraLivrosPorPreco);

function filtraLivrosPorPreco() {
  let livrvosOrdenados = livros.sort((a, b) => {
    return a.preco - b.preco;
  });
  exibirOsLivrosNaTela(livrvosOrdenados);
}

// metodo reduce
function calcularValorTotalDosLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
function exibirValorTotalDosLivros(valorTotal) {
  elementoValorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
</div>`;
}
