# To-Do List WebApp
A simple todo-list used to add, check, and delete tasks.

### Web Technologies
This todo list app is created with (HTML,CSS, Vanilla JavaScript).

## Project Architecture 
In order to manages the project easier we aim to separate the view from the programming logic. So, the project is split into UI and Logic directories. 
The UI includes (html & css) files, where the logic directory includes js functions exported to the 'main.js' file.

## Application Diagram
![Todo-List Diagram](https://github.com/samyvic/30days/assets/47760339/0f95a00b-c4d5-4dd9-84a5-9ed77f5a3b76)

## Code Analysis
- ### View-Code Elements:
  The html main element boils down to: [heading, input field, button, list-container]
- ### Logic-Code Description:
<ol>
  <li>addTask.js
      <p>If the input isn't empty, assign the input value to a created li, then appending it to the list-container</p>
  </li>
  <li>checked.js<p>If a task is ckecked, toggle between css properties, or remove a task.</p></li>
  <li>local.js
      <ul style="list-style-type: disc;">
        <li>list-container data is saved in the local storage of the web browser.</li>
        <li>The data is saved and retrieved as well.</li>
      </ul>
  </li>
  <li>main.js
      <ul style="list-style-type: disc;">
        <li>On clicking on the button or pressing enter, add a task to the container-list.</li>
        <li>On clicking on the task it is checked.</li>
        <li>On clicking on the (x: delete), the task is removed.</li>
        <li>All todo list data is saved in the localStorage on any change.</li>
      </ul>
  </li>
</ol>
