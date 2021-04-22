var jogador1 = {
  nome: "Jogador 1",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var jogador2 = {
  nome: "Jogador 2",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var jogador3 = {
  nome: "Jogador 3",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
 
jogador1.pontos = calculaPontos(jogador1)
jogador2.pontos = calculaPontos(jogador2)
jogador3.pontos = calculaPontos(jogador3)

function calculaPontos(times){
  var pontos = (times.vitorias * 1) + times.empates

  return pontos
}

var equipe  = [jogador1 , jogador2 , jogador3]

exibirNaTela(equipe)

function exibirNaTela (equipe){
  var html = ""
  for (var i = 0; i < equipe.length; i++){
    html += "<tr><td>" + equipe[i].nome + "</td>"
     html += "<td>" + equipe[i].vitorias + "</td>"
     html += "<td>" + equipe[i].empates + "</td>"
     html += "<td>" + equipe[i].derrotas + "</td>"
     html += "<td>" + equipe[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
    
  }
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html
  
}
function adicionarVitoria(i){
    var times = equipe[i]
    times.vitorias++
    times.pontos = calculaPontos(times)
    exibirNaTela(equipe)
    
  }


  function adicionarEmpate(i){
    var times = equipe[i]
    times.empates++
    times.pontos  = calculaPontos(times)
    exibirNaTela(equipe)
    
  }

function adicionarDerrota(i){
  var times = equipe[i]
  times.derrotas++
  exibirNaTela(equipe)
  
}

