const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");

  //checkbox para marcar como concluida
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});

// Delegacao de eventos, um unico listener no <ul>
// trata todos os <li>, inclusive os criados depois.
taskList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");
  if (!clickedLi || !taskList.contains(clickedLi)) return;

  // Se clicou no checkbox, so marca/desmarca concluida.
  if (event.target.matches('input[type="checkbox"]')) {
    const span = clickedLi.querySelector("span");
    span.classList.toggle("done", event.target.checked);
    return;
  }

  // Clique em qualquer outra parte do item remove a tarefa.
  clickedLi.remove();
});
