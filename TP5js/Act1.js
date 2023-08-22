document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const gameArea = document.getElementById("gameArea");
    const guessInput = document.getElementById("guessInput");
    const guessBtn = document.getElementById("guessBtn");

    let magicNumber;

    startBtn.addEventListener("click", function() {
      magicNumber = Math.floor(Math.random() * 100) + 1;
      startBtn.classList.add("d-none");
      gameArea.classList.remove("d-none");
    });

    guessBtn.addEventListener("click", function() {
      const userGuess = parseInt(guessInput.value);
      if (userGuess === magicNumber) {
        alert("Bien ahi mi ruey!!!");
        resetGame();
      } else if (userGuess < magicNumber) {
        alert("Waaa, es mayor que eso");
      } else {
        alert("Noo burro, es menor");
      }
      guessInput.value = "";
    });

    function resetGame() {
      magicNumber = null;
      startBtn.classList.remove("d-none");
      gameArea.classList.add("d-none");
    }
  });