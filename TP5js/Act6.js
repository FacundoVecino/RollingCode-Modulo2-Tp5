document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const timeInput = document.getElementById("timeInput");
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    let timeRemaining = 0;
    let intervalId;
    let isRunning = false;

    function updateTimer() {
      if (timeRemaining > 0) {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        timerElement.textContent = formattedTime;
      } else {
        clearInterval(intervalId);
        isRunning = false;
        timerElement.textContent = "00:00";
      }
    }

    startBtn.addEventListener("click", function() {
      if (!isRunning) {
        timeRemaining = parseInt(timeInput.value);
        intervalId = setInterval(updateTimer, 1000);
        isRunning = true;
      }
    });

    pauseBtn.addEventListener("click", function() {
      if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
      }
    });

    resetBtn.addEventListener("click", function() {
      clearInterval(intervalId);
      isRunning = false;
      timeInput.value = "60";
      timerElement.textContent = "00:00";
    });
  });