// function addButtonClicked() { // The add button click event
//     document.getElementsByClassName('addButton').style.display = "none";
//     let 
// };

const appForm = document.getElementById('appForm');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('task-count')

if (localStorage.getItem('tasks')) {// Here I will add a new task when the form holds a value of more than one value
    const task = localStorage.getItem('tasks').split('|');
    for (t in task){
        const taskItem = document.createElement(li);
        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    taskCount.textContent = task.length;
}

appForm.addEventListener('submit', function (event) {  
    event.preventDefault();
    const txtInput = document.getElementById('txtInput');
    const taskText = txtInput.value.trim();
    // console.log(taskText);

    if (taskText !== '') {// Here I will add a new task when the form holds a value of more than one value
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
    }
    txtInput.value = '';

    taskCount.textContent = document.getElementsByTagName('li').length;
});

// let addButton = id;
// addButton onclick{
//     if(addButton = 1){
//         display = on
//     }
//     else{addButton--,
//         Style = display:hidden;
//     }
// }
// for in loop to itterate through properties 
