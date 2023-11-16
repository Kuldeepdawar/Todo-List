let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // creating a new elements
  let todo = document.createElement("div");
  let textEI = document.createElement("span");

  //setting value & styles

  textEI.innerHTML = value;

  // Appending Our ELEMNT TO THE DOM
  todo.appendChild(textEI);

  let closeEI = document.createElement("span");
  closeEI.innerHTML = "&times";
  closeEI.classList.add("delete");

  //Attaching Events
  closeEI.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });

  todo.appendChild(closeEI);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  // preventing the default behaviur
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
