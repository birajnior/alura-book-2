const btnFiltros = document.querySelectorAll(".btn");
btnFiltros.forEach((btnFiltros) =>
  btnFiltros.addEventListener("click", filtraLivros)
);

function filtraLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
}
