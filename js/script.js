const inputTask = document.getElementById("inputTask");
const inputCategory = document.getElementById("inputCategory");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("#taskList")
const categorySelect = document.querySelector("#categorySelect");

addButton.addEventListener("click",function(){
    const task = inputTask.value;
    const category = inputCategory.value;
    const newTask = document.createElement("li");
    const newCategory = document.createElement("option");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", taskDone);

    if(task.length < 3){
        inputTask.style.border = "2px solid red";
    }
    else{
        if (category != ""){
            newTask.id = category;
            newCategory.textContent =category;
            categorySelect.appendChild(newCategory);
        }
        inputTask.style.border = "";
        newTask.appendChild(checkbox);
        newTask.appendChild(document.createTextNode(task));
        taskList.appendChild(newTask);
        inputTask.value = "";
        inputCategory.value = "";
        taskDone();
    }
});

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

