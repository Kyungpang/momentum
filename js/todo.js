const toDoForm = document.querySelector(".todo-contents__todo-form");
const toDoInput = document.querySelector(".todo-contents__todo-form input");
const toDoList = document.querySelector(".todo-contents__todo-list");

const TODOS_KEY = "todos";

let toDos = []; 

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
 const li = event.target.parentElement;
 li.remove();
 toDos = toDos.filter((item) => item.id !== parseInt(li.id));
 saveToDos();
}

function completeMission(event) {
  const lineThroughClass = "line-through";
  const span = event.target.nextElementSibling;
  if(span.classList.contains(lineThroughClass)) {
    span.classList.remove(lineThroughClass);
    span.style.opacity = 1;
  } else {
    span.classList.add(lineThroughClass);
    span.style.opacity = 0.3;
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkBoxInput = document.createElement("input");
  checkBoxInput.type = "checkbox";
  checkBoxInput.addEventListener("click", completeMission)
  li.appendChild(checkBoxInput);
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
