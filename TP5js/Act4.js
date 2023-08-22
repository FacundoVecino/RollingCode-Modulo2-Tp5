function updateClock() {
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    dayOfWeekElement.textContent = `Día de la semana: ${dayOfWeek}`;
    dateElement.textContent = `Fecha: ${dayOfMonth} de ${month} de ${year}`;
    timeElement.textContent = `Hora: ${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    setTimeout(updateClock, 1000); // Actualizar cada segundo
  }

  document.addEventListener("DOMContentLoaded", function() {
    updateClock(); // Iniciar el reloj al cargar la página
  });