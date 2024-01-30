// function addButtonClicked() { // The add button click event
//     document.getElementsByClassName('addButton').style.display = "none";
//     let 
// };

const appForm = document.getElementById('appForm'); // The checklist form
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('task-count'); // Float number

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
    
// the Code below crosses out the item, but targets all of them instead of only one item
    const crossOut = document.addEventListener('click', function () {
        console.log('hi')
        taskList.style.textDecoration = 'line-through';
    })


});





// var liElements = document.getElementsByTagName('li');
// for (var i = 0; i < liElements.length; i++) {
//     liElements[i].addEventListener('click', function() {

// this.style.backgroundColor = 'blue';
// });
// }


// let listClick = document.getElementsByTagName("li")[0];
// listClick.addEventListener("mousedown", function() {
//     this.style.textDecoration = 'line-through';
//     this.style.opacity = "0";
//     setTimeout(() => {
//     this.style.display = "none";
//   }, 500);
// });





// let listClick = taskItem.addEventListener("pointer", function() {
//     this.style.textDecoration = "line-through";});

// const listItems = document.getElementsByTagName('li');
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function() {
//         this.style.textDecoration = "line-through";
//     });
// }






// function listItemsClicked() { // The add button click event
//     document.getElementsByTagName('li').style.display = "none";
// };






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
