var filme = {
  url: "",
  nome: ""
};

var filmes = [];

function listarFilmes(filme) {
  console.log(filme.url);
  var filme =
    "<div class= filmes>" +
    "<img src=" +
    filme.url +
    "> <h2>" +
    filme.nome +
    "</h2>" +
    "</div>";
  var listaFilmes = document.getElementById("listaFilmes");
  filmes.push(filme);
  listaFilmes.innerHTML = filmes;
}

function adicionarFilme() {
  var urlFilmeInput = document.getElementById("urlFilme").value;
  var nomeFilmInput = document.getElementById("nomeFilme").value;
  var aviso = document.getElementById("aviso");
  aviso.innerHTML = "";

  if (
    urlFilmeInput.endsWith(".jpg" || ".png" || ".gif" || ".jpeg") ||
    !nomeFilmInput == ""
  ) {
    filme.url = urlFilmeInput;
    filme.nome = nomeFilmInput;
    listarFilmes(filme);
  } else {
    aviso.innerHTML = "Endereço de filme e nome inválido";
  }

  urlFilmeInput = document.getElementById("urlFilme").value = "";
  nomeFilmInput = document.getElementById("nomeFilme").value = "";
}

function removerFilme() {
  if (filmes.length == 0) {
    aviso.innerHTML = "Não existem filmes/séries na lista";
  } else {
    filmes.pop();
    listaFilmes.innerHTML = filmes;
  }
}
