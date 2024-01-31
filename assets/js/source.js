const appForm = document.getElementById("app-form"); // The checklist form
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count"); // Float number, top right corner

if (localStorage.getItem("tasks")) {
    // Here I will add a new task when the form
    // holds a value of more than one value
    const task = localStorage.getItem("tasks").split("|");
    for (t in task){
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item"); //
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    taskCount.textContent = task.length;
}

appForm.addEventListener("submit", function (event) {  
    event.preventDefault();
    const txtInput = document.getElementById("txtInput");
    const taskText = txtInput.value.trim();
    // console.log(taskText);

    if (taskText !== ""){
        // Here I will add a new task when the form
        // holds a value of more than one value
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    txtInput.value = "";

    const taskItems = document.getElementsByTagName("li");
for (let i = 0; i < taskItems.length; i++) {
    taskItems[i].addEventListener("click", function () {
        this.style.textDecoration = "line-through";
    });
}
});