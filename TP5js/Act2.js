document.addEventListener("DOMContentLoaded", function() {
    const personaForm = document.getElementById("personaForm");
    personaForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const edad = parseInt(document.getElementById("edad").value);
      const dni = document.getElementById("dni").value;
      const sexo = document.getElementById("sexo").value;
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
      const añoNacimiento = parseInt(document.getElementById("añoNacimiento").value);

      const nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);

      const generacion = nuevaPersona.calcularGeneracion();
      const mensajeGeneracion = `${nombre} pertenece a la generación ${generacion}.`;
      const mensajeMayorDeEdad = nuevaPersona.esMayorDeEdad();

      console.log(nuevaPersona.mostrarGeneracion());
      console.log(nuevaPersona.mostrarDatos());

      alert(mensajeGeneracion + "\n" + mensajeMayorDeEdad);
    });
});

    class Persona {
        constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
          this.nombre = nombre;
          this.edad = edad;
          this.DNI = DNI;
          this.sexo = sexo;
          this.peso = peso;
          this.altura = altura;
          this.añoNacimiento = añoNacimiento;
        }
    
        mostrarDatos() {
            console.log("Nombre:", this.nombre);
            console.log("Edad:", this.edad);
            console.log("DNI:", this.DNI);
            console.log("Sexo:", this.sexo);
            console.log("Peso:", this.peso);
            console.log("Altura:", this.altura);
            console.log("Año de Nacimiento:", this.añoNacimiento);
        }
    
        calcularGeneracion() {
          if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            return "Silent Generation";
          } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            return "Baby Boomer";
          } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            return "Generación X";
          } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            return "Millennials";
          } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2012) {
            return "Generación Z";
          } else {
            return "No está dentro de los parametros";
          }
        }
    
        esMayorDeEdad() {
            if(this.edad < 0){
                return "La edad ingresada es incorrecta"
            } else{
                if(this.edad >= 18){
                return "Es mayor de edad"
            } else {
                return "No es mayor de edad"
            }
            } 
        }
      
        mostrarGeneracion() {
          const generacion = this.calcularGeneracion();
          console.log(`${this.nombre} pertenece a la generación ${generacion}.`);
      
          switch (generacion) {
            case "Silent Generation":
              console.log("Caracteristica generacional: Austeridad");
              break;
            case "Baby Boomer":
              console.log("Caracteristica generacional: Ambicion");
              break;
            case "Generación X":
              console.log("Caracteristica generacional: Obsesion por el exito");
              break;
            case "Millennials":
              console.log("Caracteristica generacional: Frustracion");
              break;
            case "Generación Z":
              console.log("Caracteristica generacional: Irrelevancia");
              break;
          }
        }
      }

      

