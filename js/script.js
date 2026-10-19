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

//updating a charcount under the input
inputTask.addEventListener("input", function(){
    const task = inputTask.value;
    charcount.textContent = task.length + " / 100";
});

//validtaing the input before the task is created
function validate(){
    const task = inputTask.value.trim();
//Checking the lenght of input
    if(task.length < 3 || task.length > 100){
        inputTask.style.border = "2px solid red";
        inputError.textContent = "The task needs to be 3-100 characters long!";
        return false;
    }
//it the text is 3-100 characters long, it returns true and clears the border style
    inputTask.style.border = "";
    inputError.textContent ="";
    return true;
}

//function to create checkboxes
function createCheckbox(newTask){
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
//when checked, it adds/removes the css classes
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            newTask.classList.add("checked");
        }
        else{
            newTask.classList.remove("checked");
        }
//update the tasks done part
        taskDone();
        saveTask();
    });
    return checkbox;
}

//creates the delete button to delete the tasks
function createDeleteButton(newTask){
    const deleteButton = document.createElement("button");
//all button will have different ids
    deleteButton.id = "btn" + deleteButtonId;
    deleteButtonId++;
//event to delete the task when button is pressed
    deleteButton.addEventListener("click", function(){
        newTask.remove();
//update the tasks done part
        taskDone();
        saveTask();
    });
    return deleteButton;
}

//function to create a task. new task is unchecked by default
function createTasks(task, completed = false){
    const newTask = document.createElement("li");
//save the task text into list item
newTask.dataset.task = task;
//call the functions above
    const checkbox = createCheckbox(newTask);
    const deleteButton = createDeleteButton(newTask);
//save the checkbox status
    checkbox.checked = completed;
    if(completed){
        newTask.classList.add("checked");
    }
//adds all the elements into the task
    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(task));
    newTask.appendChild(deleteButton);
//adds the task to the list
    taskList.appendChild(newTask);
}

//Clearing the input
function clearInput(){
    inputTask.value = "";
    inputTask.style.border = "";
    charcount.textContent = "0 / 100";
}

function addTask(){
//checks that the input is valid, only runs if the return is true
    if(validate()){
        const task = inputTask.value.trim();
//it was valid, so it creates the task, checkbox and delete button
        createTasks(task);
//save the task
        saveTask();
//clearing the input
        clearInput();
//updates the tasks and makes all task visible
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
//Loop to check how many boxes are checked
    for (let checkbox of checkboxes) {
        if(checkbox.checked){
            tasksDone = tasksDone + 1;
        }
    }
    const allTasks = checkboxes.length;
//Making visible how many tasks a person has done
    document.getElementById("taskDone").textContent = tasksDone + "/" + allTasks;
}

//Function to show all tasks
function showList(){
    const tasks = document.querySelectorAll("#taskList li");
    for (let task of tasks){
        task.hidden = false;
    }
}

//To use the function when showall button is pressed
showAll.addEventListener("click", function(){
    showList();
});

//Show only tasks that that are not done when button is pressed
activeButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
    showList();
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});

//Show only tasks that are done when button is pressed
completedButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]:not(:checked)');
    showList();
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});

//saving the tasks
function saveTask(){
    const tasks = document.querySelectorAll("#taskList li");
    let saved = [];
//looping through the tasks and saving all one by one
    for(let task of tasks){
        const checkbox = task.querySelector("input[type='checkbox']");
        const taskInfo = {task: task.dataset.task, completed: checkbox.checked};
        saved.push(taskInfo);
    }
    localStorage.setItem("ToDo", JSON.stringify(saved));
}

//loading the tasks
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

//to load all the data
loadTasks();