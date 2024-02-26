let taskForm = document.querySelector("form");
let taskList = document.getElementById("todos");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let taskInput = document.getElementById("input");
  let newTodo = document.createElement("li");
  newTodo.innerHTML = taskInput.value;
  taskList.appendChild(newTodo);
  taskInput.value = "";

  newTodo.addEventListener("click", () => {
    newTodo.style.textDecoration = "line-through";
  });

  newTodo.addEventListener("contextmenu", () => {
    newTodo.remove();
  });
});
