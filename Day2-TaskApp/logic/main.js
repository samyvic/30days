import { addTask } from "./addTask.js";
import { checked } from "./checked.js";
import { saveData, showTasks } from "./local.js";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementsByTagName("button")[0];

// click the button to get the value from input field and put it in a created li
button.addEventListener('click', ()=>{
    addTask();
    saveData();
}); 

// Press Enter to get the value from input field and put it in a created li
inputBox.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        addTask();
    }
    saveData();
});

// check/checked toggle & remove task
listContainer.addEventListener("click", (e) =>{
    checked(e);
    saveData();
},false);

// Show saved tasks in local storage
showTasks();