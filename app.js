// Array to hold to-do tasks
let todoTasks = [];

// Function to render the list of tasks
function renderTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear the list before rendering

    // Loop through tasks and create list items
    todoTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const todoInput = document.getElementById('todoInput');
    const newTask = todoInput.value.trim();

    if (newTask) {
        todoTasks.push(newTask); // Add new task to the array
        todoInput.value = ''; // Clear input field
        renderTasks(); // Re-render the task list
    } else {
        alert('Please enter a task!');
    }
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit your task:', todoTasks[index]);

    if (newTask !== null && newTask.trim() !== '') {
        todoTasks[index] = newTask.trim(); // Update the task at the given index
        renderTasks(); // Re-render the task list
    }
}

// Function to delete a task
function deleteTask(index) {
    todoTasks.splice(index, 1); // Remove the task from the array
    renderTasks(); // Re-render the task list
}

// Initial rendering of the tasks (empty initially)
renderTasks();