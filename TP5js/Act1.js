const botonComienzo = document.getElementById("botonComienzo");
const numero = document.getElementById("numero");
const entradaUsuario = document.getElementById("entradaUsuario");
const botonAdivinar = document.getElementById("botonAdivinar");

let numeroMagico;

botonComienzo.addEventListener("click", function() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  botonComienzo.classList.add("d-none");
  numero.classList.remove("d-none");
});

botonAdivinar.addEventListener("click", function() {
  const numeroUsuario = parseInt(entradaUsuario.value);
  if (numeroUsuario === numeroMagico) {
    alert("Bien ahi mi ruey!!!");
    resetGame();
  } else if (numeroUsuario < numeroMagico) {
    alert("Waaa tontooo, es mayor que eso");
  } else {
    alert("Noo burro, es menor");
  }
  entradaUsuario.value = "";
});

function resetGame() {
  numeroMagico = null;
  botonComienzo.classList.remove("d-none");
  numero.classList.add("d-none");
}