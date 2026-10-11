//Creating needed variables
const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("#taskList");
const showAll = document.querySelector("#showAll");
const activeButton = document.querySelector("#active");
const completedButton = document.querySelector("#completed");

//Adding needed variables for tasks
addButton.addEventListener("click",function(){
    const task = inputTask.value;
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", taskDone);
//Check that the task is over 2 characters long
    if(task.length < 3){
        inputTask.style.border = "2px solid red";
        alert("The task needs to be at least 3 characters long!")
    }
    else{
//Addind the tasks and clearing input
        inputTask.style.border = "";
        newTask.appendChild(checkbox);
        newTask.appendChild(document.createTextNode(task));
        taskList.appendChild(newTask);
        inputTask.value = "";
        taskDone();
        showList();
    }
});

//Function to check how many tasks are done and display the number under the tasks
function taskDone() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let tasksDone = 0;
    for (let checkbox of checkboxes) {
        if(checkbox.checked){
            tasksDone = tasksDone + 1;
        }
    }
    const allTasks = checkboxes.length;
    document.getElementById("taskDone").textContent = tasksDone + "/" + allTasks;
};

//Function to show all tasks
function showList(){
    const tasks = document.querySelectorAll("#taskList li");
    for (let task of tasks){
        task.hidden = false;
    }
};

//To use the function when showall button is pressed
showAll.addEventListener("click", function(){
    showList();
});

//Show only tasks that that are not done when button is pressed
activeButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    showList();
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});

//Show only tasks that are done when button is pressed
completedButton.addEventListener("click", function(){
    showList();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(:checked');
    for (let checkbox of checkboxes){
        checkbox.parentElement.hidden = true;
    }
});