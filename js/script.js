const inputTask = document.getElementById("inputTask");
const inputCategory = document.getElementById("inputCategory");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("#taskList")

addButton.addEventListener("click",function(){
    const task = inputTask.value;
    const category = inputCategory.value;
    const newTask = document.createElement("li");

    if(task.length < 3){
        inputTask.style.border = "2px solid red";
    }
    else{
        if (category != ""){
            newTask.id = category;
        }
        inputTask.style.border = "";
        newTask.textContent = task;
    
        taskList.appendChild(newTask);
        inputTask.value = "";
    }
});
