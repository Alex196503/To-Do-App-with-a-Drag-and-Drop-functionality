export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let dragStartIndex;
export default function addTask(input)
{
    if(input.value.trim() === '')
        {
            console.log('Please introduce something!');
            return;
        }
    let task = {
        id: Date.now(),
        name: input.value,
        completed: false
        };
        tasks.push(task);
        renderTasks();
        localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function renderTasks(filter = "all")
{
    let sections = document.querySelector('.sections-added');
    let itemsLeftElement = document.querySelector('.footer>h3');
    sections.innerHTML = '';
    let filteredTasks = tasks.filter((task)=>{
        if(filter === 'completed') return task.completed;
        else if(filter === 'active') return !task.completed;
        else return true;
    })
    Array.from(filteredTasks).forEach((task)=>{
    let section = document.createElement('section');
    section.classList.add('row');
    section.setAttribute('draggable', 'true');
    section.setAttribute('data-index', `${task.id}`);
    section.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} name="todos" id="${task.id}">
        <p class="${task.completed ? 'marked' : '' }">${task.name}</p>
        <img class="icon-close" src="images/icon-cross.svg" alt="Image with a cross icon">`;
    sections.appendChild(section);
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showNrOfRemainingTasks(itemsLeftElement);
    addEventListenersforDrag();
}
export function showNrOfRemainingTasks(element)
{
    let notCompletedTasks = tasks.filter((task)=>!task.completed);
    let length = notCompletedTasks.length;
    element.textContent = `${length} items left`;
} 
export function deleteTask(target)
{
    let ourTarget = target.closest('.icon-close');
    if(!ourTarget) return;
    let parentElement = ourTarget.parentElement;
    let idTask = Number(parentElement.querySelector('input').id);        
    parentElement.remove();
    let myTask = tasks.findIndex((task)=>task.id === idTask);
    tasks.splice(myTask, 1);
    renderTasks();
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function markCompletion(target)
{
    const myInput = target.closest('input');        
        if(!myInput) return;
        let idTask = Number(myInput.id);
        let index = tasks.findIndex((task)=>task.id === idTask);
        if(index === -1) return;
        if(myInput.checked)
        {
            tasks[index].completed = true;
        }
        else{
            tasks[index].completed = false;
        }
        renderTasks();
        localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function clearCompleted()
{
    tasks = tasks.filter((task)=>!task.completed);
    renderTasks();
}
/* Drag and drop functionality */
function addEventListenersforDrag()
{
    const draggableItems = document.querySelector('.sections-added').querySelectorAll('.row');
    draggableItems.forEach((draggable)=>{
        draggable.addEventListener('dragstart', dragStart);
    })
    draggableItems.forEach((draggable)=>{
        draggable.addEventListener('dragover', dragOver);
    })
    draggableItems.forEach((draggable)=>{
        draggable.addEventListener('drop', drag);
    })
    draggableItems.forEach((draggable)=>{
        draggable.addEventListener('dragenter', dragEnter);
    })
    draggableItems.forEach((draggable)=>{
        draggable.addEventListener('dragleave', dragLeave);
    })
}
function dragStart()
{
    dragStartIndex = Number(this.closest('.row').getAttribute('data-index'));
}
function dragOver(e)
{
    e.preventDefault();
}
function dragEnter()
{
    this.classList.add('dragging');
}
function dragLeave()
{
    this.classList.remove('dragging');
}
function drag()
{
    const dragEndIndex = Number(this.closest('.row').getAttribute('data-index'));
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('dragging');
}
function swapItems(dragStart, dragEnd)
{
    const taskOne = tasks.findIndex((task)=>task.id === dragStart);
    const taskTwo = tasks.findIndex((task)=>task.id === dragEnd);
    const temp = tasks[taskOne];
    tasks[taskOne] = tasks[taskTwo];
    tasks[taskTwo] = temp;
    renderTasks();
}