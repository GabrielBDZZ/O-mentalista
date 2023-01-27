var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 3;
var elementoResultado = document.getElementById("resultado");
var chutar = document.getElementById("chutar");
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    chutar.disabled = true;
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve chutar um número entre 0 e 10";
  } else if (chute > numeroSecreto) {
    numeroTentativas--;
    elementoResultado.innerHTML =
      "Chutou muito alto! Lhe restam mais " + numeroTentativas + " tentativas";
  } else if (chute < numeroSecreto) {
    numeroTentativas--;
    elementoResultado.innerHTML =
      "Chutou muito baixo! Lhe restam mais " + numeroTentativas + " tentativas";
  }
  if (numeroTentativas == 0 ) {
    chutar.disabled = true;
    elementoResultado.innerHTML =
      "Suas tentativas acabaram! O número secreto era:" + numeroSecreto;
  }
}
function Recomecar() {
    chutar.disabled = false;
    numeroSecreto = parseInt(Math.random() * 11);
    numeroTentativas = 3;
    elementoResultado.innerHTML = "";
  }