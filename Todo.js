const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const task = todoInput.value.trim();

    if (task === "") {
        alert("Task cannot be empty.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";
}
