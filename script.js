/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

 
// Select Elements and assign to the variable 

let  newInputText = document.querySelector("#new-task");
let form = document.querySelector('.new-task-container');
let incompleteTaskUL = document.querySelector('#items');
let completedTaskUL = document.querySelector('.complete-list ul')


// Function That Need To 

let createTask = function (task){
    let listItem = document.createElement('li');
    let inputItem = document.createElement('input');
    let labelItem = document.createElement ('label');
 
    inputItem.type="checkbox";
    labelItem.innerText = task;

    listItem.appendChild(inputItem);
    listItem.appendChild(labelItem);
    return listItem;
}


let addTask = function (event){
    event.preventDefault();
    let listItem = createTask(newInputText.value);
    incompleteTaskUL.appendChild(listItem);
    newInputText.value ="";
   bindInCompleteItems(listItem, completedTask)
}
 
let bindInCompleteItems = function(taksItem, checkBoxClick){
    let checkbox = taksItem.querySelector("input[type = 'checkbox']");
    checkbox.onchange = checkBoxClick;

}


let completedTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText= "Delete"
    deleteBtn.classList = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completedTaskUL.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}
function deleteTask(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindCompleteItems = function(taksItem, deleteButtonClick){
    let deleteButton = taksItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;   
}

for (let i = 0; i < incompleteTaskUL.children.length; i++) {
    bindInCompleteItems(incompleteTaskUL.children[i], completedTask)
}
for (let i = 0 ; i <completedTaskUL.children.length; i++){
    bindCompleteItems(completedTaskUL.children[i], deleteTask)
}



form.addEventListener('submit', addTask);