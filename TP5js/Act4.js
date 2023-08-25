function actualizarReloj() {
    const datos = document.getElementById("datos");
    const tiempo = document.getElementById("tiempo");

    const diasDeSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha = new Date();
    const diaDeSemana = diasDeSemana [fecha.getDay()];
    const diaDeMes = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm = ""
        if(horas >= 12){
          horas = horas - 12;
          ampm = "PM";
        } else {
          ampm = "AM";
        }

        if(horas < 10){
          horas = "0" + horas;
        } 
        if(minutos < 10){
          minutos = "0" + minutos;
        }
        if(segundos < 10){
          segundos = "0" + segundos
        }

    datos.textContent = `${diaDeSemana} ${diaDeMes} de ${mes} del ${año}`;
    tiempo.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
    
    setTimeout(actualizarReloj, 1000); 
  }
    
  actualizarReloj(); 