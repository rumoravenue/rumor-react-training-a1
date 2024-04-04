// Function to save the to-do list
const saveTodos = (todos) => {
    try {
        localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
        console.error("Error saving todos:", error);
    }
};

// Function to load the to-do list
const getTodos = () => {
    try {
        return JSON.parse(localStorage.getItem("todos")) || [];
    } catch (error) {
        console.error("Error loading todos :", error);
    }
};

// Function to render the to-do list to the page
const renderTodos = (todos) => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = todos
        .map(
            (todo, index) => `
    <li class="todo-item ${todo.completed ? "completed" : ""}">
      <input type="checkbox" ${todo.completed ? "checked" : ""
                } onchange="toggleComplete(${index})">
      <div class="todo-details">
        <span class="todo-title">#${index + 1}: ${todo.title} # </span><br/>
        <span class="todo-description">${todo.description}</span>
      </div>
    </li>
  `
        )
        .join("");
};

// Function to add a new to-do item
const addTodo = () => {
    const titleInput = document.getElementById("new-todo-title");
    const descriptionInput = document.getElementById("new-todo-description");
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title || !description) {
        alert("Please enter both title and description.");
        return;
    }

    const todos = getTodos();
    todos.push({ title, description, completed: false });
    saveTodos(todos);
    renderTodos(todos);
    titleInput.value = "";
    descriptionInput.value = "";
};

// Function to toggle the completion status of a to-do item
const toggleComplete = (index) => {
    const todos = getTodos();
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
    renderTodos(todos);
};

// Event listeners
document.getElementById("add-todo").addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", () => renderTodos(getTodos()));

