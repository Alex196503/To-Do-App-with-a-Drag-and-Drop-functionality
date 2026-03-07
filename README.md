A professional, responsive Task Management application inspired by the Frontend Mentor challenge. On this mini-app with a responsive and beautiful design, the users can toggle between the light mode and dark mode if they want
with some colors built for every theme, they can perform CRUD operations on some tasks(they can add tasks, they can view or delete them). They also can mark the completed tasks
and filter by all/active/completed tasks. The bonus is represented by the fact that they can drag and drop items to reorder the tasks on the list. 
The most challenging part of this project was the Drag & Drop functionality. I implemented this by:
 - Mapping the DOM elements to the underlying data array (tasks).
 - Handling a sequence of events: dragstart, dragover, dragenter, dragleave, and drop.
 - State Synchronization: Ensuring that when two elements are swapped in the UI, their positions are also updated in the JavaScript array and LocalStorage to maintain the new order after a refresh.
Made with:
 - Semantic HTML 5,
 - CSS Grid & Flexbox,
 - CSS Variables & Custom Properties,
 - CSS Media Queries,
 - CSS Pseudoelements,
 - Vanilla JavaScript (ES6, array methods, arrow functions),
 - Drag and Drop HTML Api,
 - Import/Export JS to ensure a readable code and sustainable.
 - Local Storage JS API for saving data on localhost
Author: Moldovan Alex. The project was deployed via Vercel and can be viewed live and tested using this link: https://to-do-app-with-a-drag-and-drop-func.vercel.app/, there are no tasks added therefore, but can you add it.
