const appForm = document.getElementById("app-form"); // The checklist form
const taskList = document.getElementById("task-list");// The ordered list
const taskCount = document.getElementById("task-count"); // Float number

//Submit Form
appForm.addEventListener("submit", function (event) {
    event.preventDefault(); //Stops page refresh
    const txtInput = document.getElementById("user-input-txt");
    const taskText = txtInput.value.trim();
    // trim remove blank spaces from users' input text

    if (taskText !== ""){
         /* Here I will add a new task when the form
        holds a value of more than ''*/
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    txtInput.value = ""; //Sets user input box to empty

    const taskItems = document.getElementsByTagName("li");
    for (let i = 0; i < taskItems.length; i++) {
        taskItems[i].addEventListener("click", function () {
            this.style.textDecoration = "line-through";
            this.style.textDecoration = "line-through";
    });
}});

if (localStorage.getItem("tasks")) {
    const task = localStorage.getItem("tasks").split("|"); //Seperates string
    for (const t of task){
        const taskItem = document.createElement("li"); //creates "li"
        taskItem.classList.add("task-item"); //adds that "li" to "ol"
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    taskCount.textContent = task.length;
}

var date = new Date();
var dateToString = date.toDateString();
var time = date.toLocaleDateString();
document.getElementById('time').innerHTML = dateToString + ' ' + time;