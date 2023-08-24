document.addEventListener("DOMContentLoaded", function() {
  const temporizador = document.getElementById("temporizador");
  const ingresoTiempo = document.getElementById("ingresoTiempo");
  const botonInicio = document.getElementById("botonInicio");
  const botonPausa = document.getElementById("botonPausa");
  const botonReinicio = document.getElementById("botonReinicio");

  let tiempoRestante = 0;
  let intervaloId;
  let enCurso = false;

  function updateTimer() {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      const minutos = Math.floor(tiempoRestante / 60);
      const segundos = tiempoRestante % 60;
      const tiempoFormateado = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
      temporizador.textContent = tiempoFormateado;
    } else {
      clearInterval(intervaloId);
      enCurso = false;
      temporizador.textContent = "00:00";
    }
  }

  botonInicio.addEventListener("click", function() {
    if (!enCurso) {
      tiempoRestante = parseInt(ingresoTiempo.value);
      intervaloId = setInterval(updateTimer, 1000);
      enCurso = true;
      botonInicio.style.display = "none";
      botonPausa.style.display = "block";
    }
  });

  botonPausa.addEventListener("click", function() {
    if (enCurso) {
      clearInterval(intervaloId);
      enCurso = false;
      botonPausa.style.display = "none";
      botonInicio.style.display = "block";
    }
  });

  botonReinicio.addEventListener("click", function() {
    clearInterval(intervaloId);
    enCurso = false;
    ingresoTiempo.value = "60";
    temporizador.textContent = "00:00";
    botonPausa.style.display = "none";
    botonInicio.style.display = "block";
  });
});
