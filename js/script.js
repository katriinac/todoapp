//Creating needed variables
const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("#taskList");
const showAll = document.querySelector("#showAll");
const activeButton = document.querySelector("#active");
const completedButton = document.querySelector("#completed");
const charcount = document.querySelector("#charcount");
const inputError = document.querySelector("#inputError");

let deleteButtonId = 1;

//Updating a charcount under the input
inputTask.addEventListener("input", function(){
    const task = inputTask.value;
    charcount.textContent = task.length + " / 100";
});

//Validtaing the input before the task is created
function validate(){
    const task = inputTask.value.trim();
    if(task.length < 3 || task.length > 100){
        inputTask.style.border = "2px solid red";
        inputError.textContent = "The task needs to be 3-100 characters long!";
        return false;
    }
    inputTask.style.border = "";
    inputError.textContent ="";
    return true;
}

//Function to create checkboxes
function createCheckbox(newTask){
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
//Adding classes for checked/unchecked boxes
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            newTask.classList.add("checked");
        }
        else{
            newTask.classList.remove("checked");
        }
        taskDone();
        saveTask();
    });
    return checkbox;
}

//Creating the delete button to delete the tasks
function createDeleteButton(newTask){
    const deleteButton = document.createElement("button");
    deleteButton.id = "btn" + deleteButtonId;
    deleteButtonId++;
    deleteButton.addEventListener("click", function(){
        newTask.remove();
        taskDone();
        saveTask();
    });
    return deleteButton;
}

//Function to create a task. New task is unchecked by default
function createTasks(task, completed = false){
    const newTask = document.createElement("li");
newTask.dataset.task = task;
    const checkbox = createCheckbox(newTask);
    const deleteButton = createDeleteButton(newTask);
    checkbox.checked = completed;
    if(completed){
        newTask.classList.add("checked");
    }
    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(task));
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
}

//Clearing the input
function clearInput(){
    inputTask.value = "";
    inputTask.style.border = "";
    charcount.textContent = "0 / 100";
}

//Function to add the tasks
function addTask(){
    if(validate()){
        const task = inputTask.value.trim();
        createTasks(task);
        saveTask();
        clearInput();
        taskDone();
        showList();
    }
}

//Adding needed variables and functions for tasks
addButton.addEventListener("click",function(event){
    event.preventDefault();
    addTask();
});

//Function to check how many tasks are done and display the number under the tasks
function taskDone() {
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]');
    let tasksDone = 0;
    for (let checkbox of checkboxes) {
        if(checkbox.checked){
            tasksDone = tasksDone + 1;
        }
    }
    const allTasks = checkboxes.length;
    document.getElementById("taskDone").textContent = tasksDone + "/" + allTasks;
}

//Function to show all tasks
function showList(){
    const tasks = document.querySelectorAll("#taskList li");
    for (let task of tasks){
        task.hidden = false;
    }
}

//Show the whole list when All button is presseed
showAll.addEventListener("click", function(){
    showList();
});

//Show only tasks that that are not done when "Active" button is pressed
activeButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
    showList();
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});

//Show only tasks that are done when "Completed" button is pressed
completedButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]:not(:checked)');
    showList();
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});

//Saving the tasks with localstorage
function saveTask(){
    const tasks = document.querySelectorAll("#taskList li");
    let saved = [];
    for(let task of tasks){
        const checkbox = task.querySelector("input[type='checkbox']");
        const taskInfo = {task: task.dataset.task, completed: checkbox.checked};
        saved.push(taskInfo);
    }
    localStorage.setItem("ToDo", JSON.stringify(saved));
}

//Loading the tasks from localstorage
function loadTasks(){
    const saved = localStorage.getItem("ToDo");
    if(saved){
        const tasks = JSON.parse(saved);
        for(let task of tasks){
            createTasks(task.task, task.completed);
        }
    }
    taskDone();
}

//To load all the data
loadTasks();
