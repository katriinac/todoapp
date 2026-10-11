//Creating needed variables
const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("#taskList");
const showAll = document.querySelector("#showAll");
const activeButton = document.querySelector("#active");
const completedButton = document.querySelector("#completed");
let deleteButtonId = 1;
const charcount = document.querySelector("#charcount");
//const saveButton = document.querySelector("#save");

//Adding a charcount under the input
inputTask.addEventListener("input", function(){
    const task = inputTask.value;
    charcount.textContent = task.length + " / 100";
});

//Adding needed variables and functions for tasks
addButton.addEventListener("click",function(){
    const task = inputTask.value.trim();
//Checking the length
    if(task.length < 3 || task.length > 100){
        inputTask.style.border = "2px solid red";
        alert("The task needs to be 3-100 characters long!")
    }
    else{
        const newTask = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
//When checked it will mark it as done and overline the text
        checkbox.addEventListener("change", function(){
            if(checkbox.checked){
                newTask.classList.add("checked");
            }
            else{
                newTask.classList.remove("checked");
            }
            taskDone();
        });
//adding delete button
        const deleteButton = document.createElement("button");
        deleteButton.id = "btn" + deleteButtonId;
//Adding the tasks with checkmarks and dlete buttons, and clearing input
        newTask.appendChild(checkbox);
        newTask.appendChild(document.createTextNode(task));
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        inputTask.value = "";
        inputTask.style.border = "";
        charcount.textContent = "0 / 100";
//Deleting the task when delete button is pressed
        deleteButton.addEventListener("click", function(){
            newTask.remove();
//Calling the functions to update how many tasks are left & done
            taskDone();
            showList();
        });
//Changing value of deletebuttonid so that all buttons have different ids
        deleteButtonId++;
//Calling the functions again to update tasks left & lone text
        taskDone();
        showList();
    }
});

//Function to check how many tasks are done and display the number under the tasks
function taskDone() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
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

//saveButton.addEventListener("click", save);
