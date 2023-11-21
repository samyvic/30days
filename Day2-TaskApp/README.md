#To-Do List WebApp
A simple todo-list used to add, check, and delete tasks.

##Web Technologies
This todo list app is created with (HTML,CSS, Vanilla JavaScript).

##Project Architecture 
In order to manages the project easier we aim to separate the view from the programming logic. So, the project is split into UI and Logic directories. 
The UI includes (html & css) files, where the logic directory includes js functions exported to the 'main.js' file.

##Application Diagram
![alt text](image.jpg)


##Code Analysis
- View-Code Elements: (heading, input, button, list-container)
- Logic-Code Description:
1. addTask.js: 
If the input isn't empty, assign the input value to a created li, then appending it to the list-container
2. checked.js: 
If a task is ckecked, toggle between css properties, or remove a task.
3. local.js: 
- list-container data is saved in the local storage of the web browser. 
- The data is saved and retrieved as well.
4. main.js: 
- On clicking on the button or pressing enter, add a task to the container-list.
- On clicking on the task it is checked.
- On clicking on the (x: delete), the task is removed.
- All todo list data is saved in the localStorage on any change.

