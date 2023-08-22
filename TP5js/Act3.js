document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
          ${taskText}
          <button class="btn btn-danger btn-sm delete-task">Eliminar</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    });

    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-task")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
      }
    });
  });