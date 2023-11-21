const listContainer = document.getElementById("list-container");

export function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    return 0;
}

export function showTasks(){
    console.log(listContainer.innerHTML = localStorage.getItem("data")); 
    return listContainer.innerHTML = localStorage.getItem("data");
}


