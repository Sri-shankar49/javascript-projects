// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear the input field
    }
}

// Function to remove a task when it's completed
function removeTask(event) {
    const taskItem = event.target;
    taskList.removeChild(taskItem);
}

// Add event listeners
addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);