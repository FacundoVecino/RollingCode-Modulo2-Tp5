document.addEventListener("DOMContentLoaded", function() {
    const temporizador = document.getElementById("temporizador");
    const botonInicio = document.getElementById("botonInicio");
    const botonPausa = document.getElementById("botonPausa");
    const botonReinicio = document.getElementById("botonReinicio");

    let inicioTiempo = 0;
    let intervaloID;
    let enCurso = false;

    function updateTimer() {
      const currentTime = Date.now() - inicioTiempo;
      const seconds = Math.floor(currentTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      temporizador.textContent = formattedTime;
    }

    botonInicio.addEventListener("click", function() {
      if (!enCurso) {
        inicioTiempo = Date.now() - inicioTiempo;
        intervaloID = setInterval(updateTimer, 1000);
        enCurso = true;
      }
    });

    botonPausa.addEventListener("click", function() {
      if (enCurso) {
        clearInterval(intervaloID);
        enCurso = false;
      }
    });

    botonReinicio.addEventListener("click", function() {
      clearInterval(intervaloID);
      enCurso = false;
      inicioTiempo = 0;
      temporizador.textContent = "00:00:00";
    });
  });