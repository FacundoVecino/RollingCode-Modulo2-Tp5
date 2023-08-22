document.addEventListener("DOMContentLoaded", function() {
    const entradaTarea = document.getElementById("entradaTarea");
    const añadirTarea = document.getElementById("añadirTarea");
    const listaTarea = document.getElementById("listaTarea");

    añadirTarea.addEventListener("click", function() {
      const textTarea = entradaTarea.value;
      if (textTarea.trim() !== "") {
        const listaItem = document.createElement("li");
        listaItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listaItem.innerHTML = `
          ${textTarea}
          <button class="btn btn-danger btn-sm delete-task">Eliminar</button>
        `;
        listaTarea.appendChild(listaItem);
        entradaTarea.value = "";
      }
    });

    listaTarea.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-task")) {
        const listaItem = event.target.parentElement;
        listaTarea.removeChild(listaItem);
      }
    });
  });