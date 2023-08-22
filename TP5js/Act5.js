document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    let startTime = 0;
    let intervalId;
    let isRunning = false;

    function updateTimer() {
      const currentTime = Date.now() - startTime;
      const seconds = Math.floor(currentTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      timerElement.textContent = formattedTime;
    }

    startBtn.addEventListener("click", function() {
      if (!isRunning) {
        startTime = Date.now() - startTime;
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
      startTime = 0;
      timerElement.textContent = "00:00:00";
    });
  });